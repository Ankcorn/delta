"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_toolbox_1 = require("dynamodb-toolbox");
var dynamodb_1 = __importDefault(require("aws-sdk/clients/dynamodb"));
var DocumentClient = new dynamodb_1.default.DocumentClient({ region: 'us-east-1' });
exports.default = new dynamodb_toolbox_1.Table({
    name: 'datastore-dev',
    partitionKey: 'pk',
    sortKey: 'sk',
    DocumentClient: DocumentClient
});
//# sourceMappingURL=Table.js.map