import Layout from '../components/Layout';
import "../styles/3db657d9fe0478a5.css"
import "../styles/53a5e31d7ed4f176.css"
import "../styles/ef46db3751d8e999.css"
import "../styles/bef403e4b51110e5.css"
import "../styles/f7237eebd3af2a3f.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }) {

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
