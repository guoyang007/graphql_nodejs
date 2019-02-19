const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const port = 5000;
const app = express();

const { queryType } = require('./query.js');

const schema = new GraphQLSchema({ query: queryType });

// app.get('/hello', (req, res) => {
//   res.send('hello111');
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port);
console.log(`server running at ${port}`);
