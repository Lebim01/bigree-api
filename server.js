const express = require('express');
const graphqlHTTP = require('express-graphql');

const authMiddleware = require('./auth-middleware')
const schema = require('./schema')
const resolvers = require('./resolvers')

const app = express();
app.use(authMiddleware);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});