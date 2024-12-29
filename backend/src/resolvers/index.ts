const resolvers = {
    Query: {},
    
    Mutation: {
      createEvents: async (_, { input }, context) => {
        console.log(input)
        const session = context.driver.session();
        try {
          const events = await Promise.all(
            input.map(async (eventInput) => {
              const { title, description, date, location, meetupType, createdBy } = eventInput;
      
              if (!createdBy?.id) {
                throw new Error("'createdBy.id' is required to link the user to the event.");
              }
      
              // Verify that the user exists
              const userCheckResult = await session.run(
                `MATCH (u:User {id: $userId}) RETURN u`,
                { userId: createdBy.id }
              );
      
              if (!userCheckResult.records.length) {
                throw new Error(`User with ID ${createdBy.id} does not exist.`);
              }
      
              // Create event and link it to the user
              const eventResult = await session.run(
                `
                CREATE (e:Event {id: randomUUID(), title: $title, description: $description, date: $date, location: $location, meetupType: $meetupType})
                WITH e
                MATCH (u:User {id: $userId})
                CREATE (u)-[:CREATED]->(e)
                RETURN e {.*, createdBy: u {.*} }
                `,
                {
                  title,
                  description,
                  date,
                  location,
                  meetupType,
                  userId: createdBy.id,
                }
              );
              // Extract the event with createdBy relationship
            const event = eventResult.records[0].get("e");
            console.log(event);
            return {
              ...event,
              createdBy: event.createdBy, // Ensure createdBy is included
            };
            })
          );
          
          return { events };
        } finally {
          session.close();
        }
      },
    },
  };
  
  export default resolvers;
  