import { Context } from "@neo4j/graphql/dist/types";


//Event resolvers

 export const eventResolvers = {
  Query: {
    //Fetch all Events
   events: async (_: any, args:any, context: Context) => {
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

   //fetch a single event by ID
   eventById: async (_: any, { id }: { id: string }, context: Context) => {
    const session = context.driver.session();
    try {
      const result = await session.run(
        `
        MATCH (e:Event {id: $id})
        Return e
        `,
        { id }
      );
       if (!result.records.length) {
        throw new Error( 'Event not found');
       }
       return result.records[0].get('e').properties;
    } finally {
      await session.close();
    }
   },
  },

  Mutation: {
//update an Event by its ID

updateEvent: async (_:any, { id, input }: { id: string; input: any }, context: Context) => {
  const { title, description, date, location } = input;
  const session = context.driver.session();
  try {
    const result = await session.run( `
      MATCH (e:Event { id: $id})
      SET e.title = $title, e.description = $description, e.date = $date, e.location = $location
      RETURN e
      `,
      { id, title, description, date, location }
    );
    if (!result.records.length) {
      throw new Error('Event not found or could not be updated');
    }
    return result.records[0].get('e').properties;
  } finally {
    await session.close();
  }
},

//Delete event by ID

deleteEvent: async (_:any, { id }: { id: string }, context: Context) => {
  const session = context.driver.session();
  try {
    const result = await session.run(`
      MATCH (e:Event { id: $id})
      DELETE e
      RETURN e
      `,
      { id }
    );

    if (!result.record.length) {
      throw new Error ('Event not found or could not be deleted');
    }
    return { succes: true, message: 'Event deleted succesfully'};
  }finally {
    await session.close();
    }
   },
  },
};
