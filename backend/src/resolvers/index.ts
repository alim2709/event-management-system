import { getPasswordHash, verifyPassword, createAccessToken, verifyToken } from "../../utils/authentication";

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
              CREATE (u:User {id: randomUUID(), email: $email, hashedPassword: $hashedPassword})
              RETURN u
              `,
              { email, hashedPassword: hash } // Pass parameters to prevent Cypher injection
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

          const isPasswordValid =  verifyPassword(password, userNode.hashedPassword);
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
        
        const session = context.driver.session();

        const authHeader = context.req.headers.authorization;
        if (!authHeader) {
          throw new Error('Authorization header missing');
        }

        const token = authHeader.split(' ')[1];

        let decodedToken;

        try {
          decodedToken = verifyToken(token);
        } catch (err) {
          throw new Error(err);
        }

        const userId = decodedToken.user.id;

        try {
          const events = await Promise.all(
            input.map(async (eventInput) => {
              const { title, description, date, location, meetupType } = eventInput;
      
              const userCheckResult = await session.run(
                `MATCH (u:User {id: $userId}) RETURN u`,
                { userId }
              );
      
              if (!userCheckResult.records.length) {
                throw new Error(`User with ID ${userId} does not exist.`);
              }
      
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
                  userId,
                }
              );
              // Extract the event with createdBy relationship
              const event = eventResult.records[0].get("e");
          
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
  
