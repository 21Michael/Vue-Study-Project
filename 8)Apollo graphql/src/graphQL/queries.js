import gql from 'graphql-tag';

export const GET_DATA =  gql`
  query {
    getData {
      id
      name
      age
      reffer
      interests
      how
      rating
    }
  }`;


