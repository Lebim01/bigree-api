const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type User {
    id: Int!
    name: String!
    email: String!
    image: String!
    country: String!
    city: String!
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
    Category: Category
    Host: User
  }

  type PaymentMethod {
    id: Int!
    name: String!
    description: String!
  }

  type Category {
    id: Int!
    name: String!
    image: String!
  }

  type EventAsist {
    id: ID!
    createdAt: String!
  }

  type AuthData {
    token: String!
    tokenExpiration: String!
  }

  type EmailSendStatus {
    message: String
    status: Boolean!
  }

  type Verificado {
    message: String
    status: Boolean
  }

  type RootMutation {
    register(username: String!, password: String!, name: String!, country : String, city : String, image : String): EmailSendStatus
    verifyEmail(tokenverify:String): Verificado
    createEvent(title: String!, description: String! location: String!, date: String! price: Float!, image: String!): Event
    updateEvent(id: ID!, title: String!, description: String! location: String!, date: String! price: Float!, image: String!): Event
    asistEvent(idEvent: ID!): EventAsist
  }
  
  type RootQuery {
    profile: User
    user(id: ID!): User
    users: [User]

    event(id: ID!): Event
    events(search: String, own: Boolean): [Event]

    categories: [Category]
    category(id: ID!): Category

    paymentMethod(id: ID!): PaymentMethod
    paymentMethods: [PaymentMethod]

    login(username: String!, password: String!): AuthData!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`)

module.exports = schema