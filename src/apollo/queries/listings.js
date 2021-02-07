import gql from 'graphql-tag';

export const LISTINGS_QUERY = gql`
  query GetListings {
    listings {
      image
      name
      description
      ratings
      reviews {
        count
        percent
      }
      includes
      amount
      amountPerPerson
    }
  }
`;
