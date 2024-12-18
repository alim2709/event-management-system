import express from 'express';
import { createHandler } from "graphql-http/lib/use/express";

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

import  graphqlPlayground  from 'graphql-playground-middleware-express';
 

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});
 


const app = express();
const port = 3000;

app.all('/graphql', createHandler({ schema }));

app.get('/', (req, res) => {
  res.send('Hello NOD Readers!');
});

app.get('/playground', graphqlPlayground({ endpoint: '/graphql' }));

app.listen(port, () => {
return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
