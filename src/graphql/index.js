import {
  ApolloClient, HttpLink, InMemoryCache, ApolloLink
} from 'apollo-boost';
import { createUploadLink } from 'apollo-upload-client';
import config from '../config';
import { getToken } from '../util/authen';

const URL_API = `${config.apiHost}/graphql`;

// const httpLink = new HttpLink({ uri: URL_API });

// const authLink = new ApolloLink((operation, forward) => {
//   // eslint-disable-next-line no-undef
//   const token = String(getToken());
//   operation.setContext({
//     headers: {
//       'x-access-token': token
//     }
//   });
//   return forward(operation);
// });

const token = String(getToken());

const client = new ApolloClient({
  link: createUploadLink({
    uri: URL_API,
    headers: {
      'x-access-token': token
    }
  }),
  cache: new InMemoryCache()
});

export default client;
