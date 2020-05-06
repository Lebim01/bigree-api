const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type User {
    id: Int!
    name: String!
    email: String!
    image: String!
  }

  type UserEvent {
    id: Int!
    UserId: Int!
    EventId: Int!
    User: User!
  }

  type Event {
    id: Int!
    title: String!
    description: String!
    location: String!
    date: String!
    price: Float!
    image: String!
    UserEvents: [UserEvent]
  }

  type AuthData {
    token: String!
  }

  type RootMutation {
    register(username: String!, password: String!, name: String!): User
    createEvent(title: String!, description: String! location: String!, date: String! price: Float!, image: String!): Event
  }
  
  type RootQuery {
    user(id: ID!): User
    users: [User]
    event(id: ID!): Event
    events: [Event]
    login(username: String!, password: String!): AuthData!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)

module.exports = schema