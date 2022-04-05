import '../styles/globals.css';
import Head from "next/head";
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Today i learned</title>
      </Head>
      <Component />
    </>
  );
}

export default wrapper.withRedux(App);
