import { errorResponse } from '../utils/error';

exports.handler = async (event, context, callback) => {
  try {
    callback(null, {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Health check passed'
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
