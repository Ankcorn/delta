import { Table, Entity } from "dynamodb-toolbox";
import DynamoDB from "aws-sdk/clients/dynamodb";
const DocumentClient = new DynamoDB.DocumentClient({ region: 'us-east-1' });

export const Data = new Table({
    name: 'datastore-dev',
    partitionKey: 'pk',
    sortKey: 'sk',
    DocumentClient  
});

export const User = new Entity({
    name: 'User',
    attributes: {
        id: {  partitionKey: true },
        sk: { hidden: true, sortKey: true, default: () => 'user' },
        grt: { alias: 'githubRefreshToken' },
        ce: { alias: 'contactEmail' },
    },
    table: Data
});

export const Pipeline = new Entity({
    name: 'Pipeline',
    attributes: {
        userId: { partitionKey: true },
        sk: { hidden: true, sortKey: true },
        config: { type: 'string' },
        mb: { alias: 'mainBranch' },
        type: ['sk', 0],
        id: ['sk', 1]
    },
    table: Data
});

export const Build = new Entity({
    name: 'Build',
    attributes: {
        pipelineId: { partitionKey: true },
        sk: { hidden: true, sortKey: true },
        status: { type: 'string' },
        et: { alias: 'executionTime' },
        type: ['sk', 0],
        id: ['sk', 1],
    },
    table: Data
});
