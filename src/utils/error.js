/**
 * Formatted error response
 * @errorMessage
 * @awsRequestId
 * @callback
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
