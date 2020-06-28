import { Table } from "dynamodb-toolbox";
import DynamoDB from "aws-sdk/clients/dynamodb";

const DocumentClient = new DynamoDB.DocumentClient({ region: 'us-east-1' });

export default new Table({
    name: 'datastore-dev',
    partitionKey: 'pk',
    sortKey: 'sk',
    DocumentClient  
});
