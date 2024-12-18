import dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { Neo4jGraphQL } from '@neo4j/graphql';
import neo4j from 'neo4j-driver';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

 
// Load environment variables
dotenv.config();

// Load GraphQL type definitions
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

// Create Neo4j driver instance
const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
);

// Create instance of Neo4jGraphQL
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

async function startServer() {
  try {
    const app = express();
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
