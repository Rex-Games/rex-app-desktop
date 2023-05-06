import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Layout from '@/modules/Layout';
import Library from '@/modules/Library/Page';

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rex</title>
        <meta name="description" content="Rexberry Pi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Library />
      </Layout>
    </>
  );
}

export default Home;
