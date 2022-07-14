import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://swapi.dev/api/",
    credentials: "same-origin",
    fetch,
  }),
  cache: new InMemoryCache().restore({}),
});