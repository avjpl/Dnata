import { makeExecutableSchema } from 'apollo-server-micro';
import { merge } from 'lodash';

import schemaDirectives from './directives';
import typeDefs from './typedefs/typeDefs';
import { listingsDefs, listingsResolvers } from './typedefs/listings';

export const schema = makeExecutableSchema({
  typeDefs: [typeDefs, listingsDefs],
  resolvers: [merge(listingsResolvers)],
  schemaDirectives,
});
