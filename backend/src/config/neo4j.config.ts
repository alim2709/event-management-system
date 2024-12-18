import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';
dotenv.config();

export const Neo4jDriver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(process.env.NEO4J_USERNAME!, process.env.NEO4J_PASSWORD!)
);
