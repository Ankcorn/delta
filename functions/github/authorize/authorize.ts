import { AuthOptions, TokenAuthentication } from "@octokit/auth-oauth-app/dist-types/types";
import { Octokit } from "@octokit/rest";
import Users from "../../../services/data/Users";

interface IAuthInput {
    body: null,
    code: string,
    installation_id: string,
    setup_action: string
};

interface IGithubAuthorizeContext {
    oauth(authOptions: AuthOptions): Promise<TokenAuthentication>
    Github: typeof Octokit
    Users: typeof Users
}

async function authorize(input: IAuthInput, { oauth, Github, Users }: IGithubAuthorizeContext) {
    const result = await oauth({ type: 'token', code: input.code });
    const github = new Github({ auth: result.token });
    const user = await github.users.getAuthenticated();

    await Users.put({
        id: user.data.id,
        email: user.data.email,
        githubToken: result.token,
        name: user.data.name
    });

    return {
        message: "Success"
    };
}

export default authorize;
