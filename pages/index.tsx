import { Navbar } from '../components/navbar';
import { Category } from '../components/category';
import {
  LastProducts,
  MainProducts,
  PopularProducts,
} from '../components/products';
import { Services } from '../components/services';
import { Brand } from '../components/brand/Brand';

const HomePage = () => (
  <div>
    <Navbar />
    <Category />
    <MainProducts />
    <PopularProducts />
    <LastProducts />
    <Services />
    <Brand />
  </div>
);

export default HomePage;
