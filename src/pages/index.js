import Head from 'next/head';
import { useQuery } from '@apollo/client';

import Layout from '../components/layout';
import Listings from '../components/listings';
import { initializeApollo } from '../apollo/client';
import { LISTINGS_QUERY } from '../apollo/queries/listings';

export default function Hotels() {
  const { data: { listings } = {}, loading, error } = useQuery(LISTINGS_QUERY);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Hotel in Dubai</title>
      </Head>
      <Layout>
        <Listings listings={listings} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LISTINGS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
