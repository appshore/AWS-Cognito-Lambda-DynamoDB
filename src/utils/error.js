/**
 * Formatted error response
 * @param errorMessage
 * @param awsRequestId
 * @param callback
 */
const errorResponse = ({ errorMessage, awsRequestId, callback }) =>
  callback(null, {
    statusCode: 500,
    body: JSON.stringify({
      Error: errorMessage,
      Reference: awsRequestId
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

export default errorResponse;
