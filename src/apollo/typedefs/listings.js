import { gql } from 'apollo-server-micro';
import axios from 'axios';

export const listingsDefs = gql`
  type Reviews {
    count: Int
    percent: Float
  }

  type Listing {
    image: String
    name: String
    description: String
    ratings: Float
    reviews: Reviews
    includes: Object
    amount: Float
    amountPerPerson: Int
  }

  extend type Query {
    listings: [Listing]
  }
`;

export const listingsResolvers = {
  Query: {
    listings: async () => {
      const { data } = await axios({
        url: 'http://localhost:3004/listings',
      });
      return data;
    },
  },
};
