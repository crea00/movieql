import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
  /*
    Schema is a description of data that you're going to give to the user 
    or that you're going to get from your user.
  */
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("Graphql Server Running"));