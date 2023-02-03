import { Navbar } from '../components/navbar';
import { Category } from '../components/category';
import {
  LastProducts,
  MainProducts,
  PopularProducts,
} from '../components/products';
import { Services } from '../components/services';
import { Brand } from '../components/brand/Brand';
import { Footer } from '../components/footer';

const HomePage = () => (
  <div>
    <Navbar />
    <Category />
    <MainProducts />
    <PopularProducts />
    <LastProducts />
    <Services />
    <Brand />
    <Footer />
  </div>
);

export default HomePage;
