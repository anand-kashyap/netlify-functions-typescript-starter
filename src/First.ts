import { APIGatewayEvent, Context } from 'aws-lambda';
import { add } from './utils/funcs';

export async function handler(event: APIGatewayEvent, context: Context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Hello Netlify Functions',
      more: add(12, 34),
    }),
  };
}
