import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTo = 'https://bit.ly/whatspp-number0341345678'; // Apni website ka URL yahan change karein
    router.replace(redirectTo); // replace() push ki jagah better hai, taaki back button se wapas na aaye
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=https://bit.ly/whatspp-number0341345678" />
      </Head>
      <p>Redirecting...</p> {/* Agar JavaScript disable ho to user ko ye text dikhega */}
    </>
  );
};

export default Home;
