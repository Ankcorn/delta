
import laconia from "@laconia/core";
import config from "@laconia/config";
import { apigateway } from "@laconia/adapter-api";
import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import { Octokit as Github } from "@octokit/rest";
import Users from "../../../services/data/Users";

import authorize from "./authorize";

import { Handler } from "aws-lambda";

const api = apigateway({
    inputType: "params",
    responseStatusCode: 302,
    responseAdditionalHeaders: {
        location: 'https://github.com'
    }
})

const integrations = ({ githubClientId, githubClientSecret }) => ({
    oauth: createOAuthAppAuth({
        clientId: githubClientId,
        clientSecret: githubClientSecret,
    }),
    Github,
    Users
})

export const handler: Handler = laconia(api(authorize))
    .register(config.envVarInstances())
    .register(integrations)

