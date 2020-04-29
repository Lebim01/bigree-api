const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
      }
    })
  })
});

module.exports = schema