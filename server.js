const express = require('express');
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql');

const schema = require('./schema')
const resolvers = require('./resolvers')

//require('./middlewares')(schema)

const { addMiddleware } = require('graphql-add-middleware');
addMiddleware(schema, 'Query', async function (root, args, context, info, next) { console.log('UNA QUERY') });

const app = express();

app.use(bodyParser.json())

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