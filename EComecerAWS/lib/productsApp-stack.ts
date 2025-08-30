// Stack da função labda de pesquisa de produto

import * as lambda from "aws-cdk-lib/aws-lambda";
import * as labdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs";
import * as cdk from "aws-cdk-lib";

import { Construct } from "constructs";

export class ProductsAppStack extends cdk.Stack {
  readonly productsFetchHandler: labdaNodeJS.NodejsFunction;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.productsFetchHandler = new labdaNodeJS.NodejsFunction(
      this,
      "productsFetchFunction", {
        functionName: "productsFetchFunction",
        entry: "lambda/products/productsFetchFunction.ts", // caminho do arquivo TypeScript da Lambda
        handler: "handler", // função que será executada
        runtime: lambda.Runtime.NODEJS_20_X, 
        memorySize: 512, // memória alocada em MB
        timeout: cdk.Duration.seconds(10), // tempo máximo de execução
        bundling: {
            minify: true, // compactar o código
            sourceMap: false,
        },
      }
    );
  }
}

