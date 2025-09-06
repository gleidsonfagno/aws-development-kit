import * as cdk from "aws-cdk-lib";
import * as labdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cwlogs from "aws-cdk-lib/aws-logs";
import { Construct } from "constructs";

interface EComemerceApiStackProps extends cdk.StackProps {
    productsFetchHandler: labdaNodeJS.NodejsFunction;
}

export class EComemerceApiStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: EComemerceApiStackProps) {
    super(scope, id, props);


    const api = new apigateway.RestApi(this, "ECommerceApi", {
        restApiName: "ECommerceApi"
    })

    const productsFetchFunction = new apigateway.LambdaIntegration(props.productsFetchHandler)
    // "/products"
    const productsResource = api.root.addResource("products")
    // metodo
    productsResource.addMethod("GET", productsFetchFunction)
  }

}
