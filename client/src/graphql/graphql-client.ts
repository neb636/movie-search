import ApolloClient from 'apollo-boost';
import { BASE } from '@common/constants';

export const graphQLClient = new ApolloClient({
  uri: `${BASE}graphql`
});
