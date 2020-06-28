"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var core_1 = __importDefault(require("@laconia/core"));
var config_1 = __importDefault(require("@laconia/config"));
var adapter_api_1 = require("@laconia/adapter-api");
var auth_oauth_app_1 = require("@octokit/auth-oauth-app");
var rest_1 = require("@octokit/rest");
var Users_1 = __importDefault(require("../../../services/data/Users"));
var authorize_1 = __importDefault(require("./authorize"));
var api = adapter_api_1.apigateway({
    inputType: "params",
    responseStatusCode: 302,
    responseAdditionalHeaders: {
        location: 'https://github.com'
    }
});
var integrations = function (_a) {
    var githubClientId = _a.githubClientId, githubClientSecret = _a.githubClientSecret;
    return ({
        oauth: auth_oauth_app_1.createOAuthAppAuth({
            clientId: githubClientId,
            clientSecret: githubClientSecret,
        }),
        Github: rest_1.Octokit,
        Users: Users_1.default
    });
};
exports.handler = core_1.default(api(authorize_1.default))
    .register(config_1.default.envVarInstances())
    .register(integrations);
//# sourceMappingURL=index.js.map