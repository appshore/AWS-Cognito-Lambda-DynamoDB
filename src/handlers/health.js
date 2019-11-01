/**
 * Health check Lambda
 * @event
 * @context
 * @callback
 */
const health = async (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Health check passed'
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export default health;
