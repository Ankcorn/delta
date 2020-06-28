import { Entity, SchemaType } from "dynamodb-toolbox";
import table from './Table';

export interface User{
    id: SchemaType,
    githubToken?: SchemaType,
    email?: SchemaType,
    name?: SchemaType
}

export default new Entity<User,  'PK' | 'SK'>({
    name: 'User',
    timestamps: true,
    created: 'createdAt',
    modified: 'modifiedAt',
    attributes: {
        PK: { type: 'string', hidden: true, map: 'pk', partitionKey: true, default: (data: User) => `User#${data.id}` },
        SK: { type: 'string', hidden: true, map: 'sk', sortKey: true, default: () => `User`},
        id: 'string',
        githubToken: 'string',
        email: 'string',
        name: 'string'
    },
    table
})
