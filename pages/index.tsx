import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTo = 'https://deceivedaisle.com/ee6xrrjaq?key=f29e6caa649a7fd9033f5e7663d5086f'; // Apni website ka URL yahan change karein
    router.replace(redirectTo); // replace() push ki jagah better hai, taaki back button se wapas na aaye
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=https://deceivedaisle.com/ee6xrrjaq?key=f29e6caa649a7fd9033f5e7663d5086f" />
      </Head>
      <p>Redirecting...</p> {/* Agar JavaScript disable ho to user ko ye text dikhega */}
    </>
  );
};

export default Home;
