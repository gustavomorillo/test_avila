import { Navbar } from '../components/navbar';
import { Layout } from '../components/common';
import { Category } from '../components/category';
import {
  LastProducts,
  MainProducts,
  PopularProducts,
} from '../components/products';
import { Services } from '../components/services';
import { Brand } from '../components/brand/Brand';
import { Footer } from '../components/footer';
import { FirstAdSection, SecondAdSection } from '../components/advertise';

const HomePage = () => (
  <>
    <Navbar />
    <Layout>
      <Category />
      <MainProducts />
      <FirstAdSection />
      <PopularProducts />
      <SecondAdSection />
      <LastProducts />
      <Services />
      <Brand />
    </Layout>
    <Footer />
  </>
);

export default HomePage;
