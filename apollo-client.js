import { ApolloClient, InMemoryCache } from '@apollo/client';

const SERVER_URL = 'https://us-central1-react-baemin.cloudfunctions.net/merchantInfo';

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

export default client;
