const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  type AuthData {
    idUser: Int!
    token: String!
  }
  
  type Query {
    user(id: ID!): User
    users: [User]
    login(username: String!, password: String!): AuthData!
  }
`)

module.exports = schema