import { Context } from "@neo4j/graphql/dist/types";


//Event resolvers

const eventResolvers = {
  Query: {
    //to get all Events
   events: async ( parent: any, arg:any, context: Context) => {
    const session = context.driver.session();
    try {
      const result = await session.run(`
        MATCH (e:Event)
        RETURN e
        `);
        return result.records.map((record)=>record.get('e').properties);
    } finally {
      await session.close();
    }
   },
  },

  Mutation: {
    // to create a New Event

    createEvent: async (parent:any, arg:any, context: Context) => {
      const { input } = AbortSignal;
      const session = context.driver.session();
      try {
        const result = await session.run(`
          CREATE (e:Event {
          id:randomUUID(),
          title: $title,
          description: $description,
          date: $date,
          location: &location
          })
          RETURN e

          `,
          {
            title: input.title,
            description: input.description,
            date: input.date,
            location: input.location,
          }
        );
        return result.records[0].get('e').properties;
      } finally {
        await session.close();
      }
    },
  },
}

export default eventResolvers ;