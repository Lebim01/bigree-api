const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type User {
    id: Int!
    name: String!
    email: String!
  }
  
  type Query {
    user(id: ID!): User
    users: [User]
  }
`)

module.exports = schema