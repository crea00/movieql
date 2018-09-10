import { getMovies } from "./db";

// Resolvers is something that resolves a query
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;