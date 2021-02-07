import { LISTINGS_QUERY } from '../../../apollo/queries/listings';

export default {
  request: {
    query: LISTINGS_QUERY,
  },
  result: {
    data: {
      listings: [
        {
          image: 'https://placeimg.com/580/300/arch',
          name: 'Grand Hyatt Dubai',
          description: 'Bur Dubai Area, Dubai',
          ratings: 4.5,
          reviews: {
            count: 52,
            percent: 9.3,
          },
          includes: {
            food: 'Room Only',
            charges: 'Local charges Payable at hotel',
          },
          amount: 800,
          amountPerPerson: 400,
        },
      ],
    },
  },
  error: new Error('An error occurred'),
};
