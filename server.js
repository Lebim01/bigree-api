require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql');

const schema = require('./schema')
const resolvers = require('./resolvers')
const app = express();

/**
 * Middlewares
 */
app.use(bodyParser.json())
app.use(
    [
        require('./middlewares/token'),
        require('./middlewares/logged'),
        require('./middlewares/admin')
    ]
)

app.use(
    '/graphql',
    graphqlHttp({
        rootValue: resolvers,
        schema,
        graphiql: true,
    }),
);

// The `listen` method launches a web server.
app.listen(4004, () => {
    console.log(`🚀  Server ready at localhost:4004`);
});