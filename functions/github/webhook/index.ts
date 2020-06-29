
import laconia from "@laconia/core";
import { apigateway } from "@laconia/adapter-api";
import { Handler } from "aws-lambda";

const api = apigateway({
    inputType: "body",
})

function app(event, context) {
    console.log(event, context);
    return {
        value: 'Success'
    }
}

export const handler: Handler = laconia(api(app));
