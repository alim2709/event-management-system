import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import bodyParser from 'body-parser';
import { Neo4jGraphQL } from '@neo4j/graphql';
import typeDefs from './schemas';
import resolvers from './resolvers';
import { Neo4jDriver } from './config/neo4j.config';

async function startServer() {
  try {
    const app = express();
    const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver: Neo4jDriver });
    const schema = await neoSchema.getSchema();

    const server = new ApolloServer({ schema });
    await server.start();

    app.use('/graphql', bodyParser.json(), expressMiddleware(server));

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error("Server startup failed:", JSON.stringify(error, null, 2));
    if (Array.isArray(error)) {
      console.error("Error Details:", error.map((e) => e.message));
    }
    process.exit(1);
  }
}

startServer().catch((err) => {
  console.error("Unhandled error occurred:", JSON.stringify(err, null, 2));
  if (Array.isArray(err)) {
    console.error("Error Details:", err.map((e) => e.message));
  }
  process.exit(1);
});
