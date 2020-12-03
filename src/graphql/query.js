import gql from 'graphql-tag';

export const ME = gql`
  query me {
    me {
      status
      message
      data {
        username
        id
        email
      }
    }
  }
`;

export const CATEGORIES = gql`
  query categories($limit: Int, $offset: Int) {
    categories(limit: $limit, offset: $offset) {
      status
      message
      data {
        id
        name
      }
    }
  }
`;

export const BLOCKCHAINS = gql`
  query blockchains($limit: Int, $offset: Int) {
    blockchains(limit: $limit, offset: $offset) {
      status
      message
      data {
        id
        name
      }
    }
  }
`;

export const APPS = gql`
  query apps($limit: Int, $offset: Int) {
    apps(limit: $limit, offset: $offset) {
      status
      message
      data {
        id
        logo
        name
        shortDesc
      }
    }
  }
`;
