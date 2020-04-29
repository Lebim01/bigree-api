const { gql } = require('apollo-server');

const schema = gql(`
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