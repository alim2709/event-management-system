import { getPasswordHash, verifyPassword, createAccessToken } from "../../utils/authentication";

export const resolvers = {
    Query: {},
    
    Mutation: {
      signUp: async (_, { input}, context) => {
          const {email, password} = input;
          const session = context.driver.session();
          const hash = await getPasswordHash(password);
          try {
            const existingUser = await session.run(
              `
              MATCH (u:User {email: $email})
              RETURN u
              `,
              { email }
            );
  
            if (existingUser.records.length > 0) {
                // User already exists
                return {
                    success: false,
                    message: 'A user with this email already exists.',
                };
            }

            const createUser = await session.run(
              `
              CREATE (u:User {email: $email, password: $password})
              RETURN u
              `,
              { email, password: hash } // Pass parameters to prevent Cypher injection
            );

            // Extract the created user node
            const user = createUser.records[0].get('u').properties;

            return {
              success: true,
              message: 'User created successfully',
              user,
            };
          }catch (err) {
            console.error('Error creating user:', err);
      
            // Close the session in case of error
      
            return {
              success: false,
              message: 'Error creating user',
            };
          } finally {
            // Ensure the session is closed even if there's an error
            await session.close();
          }
      },

      login: async (_, { input}, context) => {
        const { email, password} = input;

        const session = context.driver.session();

        try {
          // Check if user exists by email
          const result = await session.run(
              `MATCH (u:User {email: $email}) RETURN u`,
              { email }
          );
  
          if (result.records.length === 0) {
              throw new Error("User does not exist with the provided email.");
          }
  
          const userNode = result.records[0].get("u").properties;

          const isPasswordValid =  verifyPassword(password, userNode.password);
          if (isPasswordValid) {
            const accessToken = createAccessToken(
              {
                "id": String(userNode.id),
                "email": userNode.email,
                "username": userNode.username
              }
            )

            const refreshToken = createAccessToken(
              {
                "id": String(userNode.id),
                "email": userNode.email,
                "username": userNode.username
              },
              Math.floor(Number(process.env.REFRESH_TOKEN_EXPIRE_DAYS) * 24 * 60 * 60),
              true 
            );

            return {
              success: true,
              message: "You now are logged in",
              accessToken: accessToken,
              refreshToken: refreshToken
            }
        }
        
      } catch (err) {
        throw new Error(err)
      } finally{
        session.close();
      }
    },

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
  