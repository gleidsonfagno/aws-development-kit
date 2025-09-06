import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {

    const lambdaRequest = context.awsRequestId
    const apiRequestId = event.requestContext.requestId

    // console.log(`API gateway Request: ${apiRequestId} - Lambda RequestId: ${lambdaRequest}`)
  const method = event.httpMethod;

  if (event.resource === "/products") {
    if (method === "GET") {
        // console.log("GET")

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "GET Propducts - OK"
            })
        }
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({
        message: "Bad request"
    })
  }
}
