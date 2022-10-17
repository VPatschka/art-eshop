import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://champion-vervet-56.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': authToken
      }
    }),
    cache: new InMemoryCache(),
  });
};
