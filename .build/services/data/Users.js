"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamodb_toolbox_1 = require("dynamodb-toolbox");
var Table_1 = __importDefault(require("./Table"));
exports.default = new dynamodb_toolbox_1.Entity({
    name: 'User',
    timestamps: true,
    created: 'createdAt',
    modified: 'modifiedAt',
    attributes: {
        PK: { type: 'string', hidden: true, map: 'pk', partitionKey: true, default: function (data) { return "User#" + data.id; } },
        SK: { type: 'string', hidden: true, map: 'sk', sortKey: true, default: function () { return "User"; } },
        id: 'string',
        githubToken: 'string',
        email: 'string',
        name: 'string'
    },
    table: Table_1.default
});
//# sourceMappingURL=Users.js.map