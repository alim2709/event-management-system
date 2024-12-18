import fs from 'fs';
import path from 'path';

const userTypeDefs = fs.readFileSync(path.join(__dirname, './user.graphql'), 'utf8');
const eventTypeDefs = fs.readFileSync(path.join(__dirname, './event.graphql'), 'utf8');

const typeDefs = `${userTypeDefs}
${eventTypeDefs}`;
export default typeDefs;
