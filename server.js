const { ApolloServer, gql } = require('apollo-server');

const authMiddleware = require('./auth-middleware')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});