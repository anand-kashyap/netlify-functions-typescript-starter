import { APIGatewayEvent, Context } from 'aws-lambda';
import { add } from './utils/funcs';

export async function handler(event: APIGatewayEvent, context: Context) {
  const { a = 12, b = 2 } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Hello Netlify Functions',
      custom: add(a, b),
    }),
  };
}
