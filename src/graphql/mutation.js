import gql from 'graphql-tag';

export const FACEBOOK_LOGIN = gql`
  mutation facebookLogin($token: String) {
    facebookLogin(token: $token) {
      status 
      message
      accessToken
      data {
        id
        name
        email
      }
    }
  }
`;

export const GOOGLE_LOGIN = gql`
  mutation googleLogin($token: String) {
    googleLogin(token: $token) {
      status 
      message
      accessToken
      data {
        id
        name
        email
      }
    }
  }
`;

export const UPLOAD_FILES = gql`
  mutation uploadFiles($files: [Upload]!) {
    uploadFiles(files: $files) {
      status
      message
      data {
        link
      }
    }
  }
`;

export const CREATE_APP = gql`
  mutation createApp($input: CreateAppInput) {
    createApp(input: $input) {
      status
      message
    }
  }
`;
