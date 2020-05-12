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
app.use(
    [
        require('./middlewares/token'),
        require('./middlewares/logged'),
        require('./middlewares/admin')
    ]
)
app.use(bodyParser.json())

app.use(
    '/graphql',
    graphqlHttp({
        rootValue: resolvers,
        schema,
        graphiql: true,
    }),
);

app.get('/verify',function(req,res){
    console.log(req.protocol+":/"+req.get('host'));
    host=req.get('host');

    if(req.protocol+"://"+host == "http://"+host){
        console.log("Domain is matched. Information is from Authentic email");
        console.log(req.query.id)
        resolvers.verifyEmail({tokenverify:req.query.id})
    }
    else{
        res.end("<h1>Request is from unknown source");
    }
});

// The `listen` method launches a web server.
app.listen(4004, () => {
    console.log(`🚀  Server ready at localhost:4004`);
});

