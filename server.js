const express = require('express');
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql');

const authMiddleware = require('./auth-middleware')
const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express();

app.use(authMiddleware)

app.use(
    '/graphql',
    graphqlHttp({
        rootValue: resolvers,
        schema,
        graphiql: true,
    }),
);

// The `listen` method launches a web server.
app.listen(4000, () => {
    console.log(`🚀  Server ready at localhost:4000`);
});