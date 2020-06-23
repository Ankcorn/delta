import { User, Build, Pipeline } from "./index"

describe('Data', () => {
    it('does the stuff', async () => {
        await User.put({
            id: '12345',
            githubRefreshToken: '1234',
            contactEmail: 'me@hey.com'
        });

        const user = await User.get({ id: '12345'});
        
        console.log(user)

        await Pipeline.put({
            userId: '12345',
            type: 'pipeline',
            id: 'a1a1',
            mainBranch: 'main',
            config: 'I get paid to write yml, for fun I write matlab'
        });

        await Pipeline.put({
            userId: '12345',
            type: 'pipeline',
            id: 'b2b2',
            mainBranch: 'main',
            config: '🤘 do emoji\'s work in dynamodb'
        });

        const pipelines = await Pipeline.query('12345', { beginsWith: 'pipeline'})
        console.log(pipelines)

        await Build.put({
            pipelineId: 'b2b2',
            id: 'cccc',
            type: 'build',
            status: 'success',
            executionTime: 93
        })

        const build = await Build.get({
            pipelineId: 'b2b2',
            id: 'cccc',
            type: 'build'
        })

        console.log(build)
    })    
})
