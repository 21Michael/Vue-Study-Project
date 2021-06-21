import gql from 'graphql-tag';

export const POST_DATA =  gql`
  mutation($name: String!, $age: String!, $reffer: String!, $interests: [String]!, $how: String!, $rating: String!) {
    postData(name: $name, age: $age, reffer: $reffer, interests: $interests, how: $how, rating: $rating)
  }`;


