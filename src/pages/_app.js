import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';

import '../styles/css/index.css';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
