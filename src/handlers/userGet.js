import AWS from 'aws-sdk';

import { errorResponse } from '../utils/error';

// We are using last versions of API
const dyna = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

/**
 * A lambda fct that returns some user information
 */
exports.handler = async (event, context, callback) => {
  if (!event.requestContext.authorizer) {
    errorResponse({
      errorMessage: 'Authorization not configured',
      awsRequestId: context.awsRequestId,
      callback
    });
    return;
  }

  // user is authenticated
  // we retrieve the usedId from Cognito authentication provider
  let userId = event.requestContext.identity.cognitoAuthenticationProvider.split(
    ':CognitoSignIn:'
  )[1];

  try {
    // retrieve some information from the user profile stored in dynamoBD
    const { firstName, lastName, email } = await getProfile({ userId });

    callback(null, {
      statusCode: 201,
      body: JSON.stringify({
        firstName,
        lastName,
        email
      }),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    errorResponse({
      errorMessage: err.message,
      awsRequestId: context.awsRequestId,
      callback
    });
  }
};

/**
 * Get User's profile
 * @username
 */
const getProfile = async ({ userId }) =>
  dyna
    .getItem({
      TableName: 'Users',
      Key: {
        'userId': { S: userId }
      },
      ProjectionExpression: 'ATTRIBUTE_NAME'
    })
    .promise()
    .then(ret => ret);
