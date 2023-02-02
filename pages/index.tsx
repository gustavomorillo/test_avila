import { Navbar } from '../components/navbar';
import { Category } from '../components/category';
import {
  LastProducts,
  MainProducts,
  PopularProducts,
} from '../components/products';
import { Services } from '../components/services';

const HomePage = () => (
  <div>
    <Navbar />
    <Category />
    <MainProducts />
    <PopularProducts />
    <LastProducts />
    <Services />
  </div>
);

export default HomePage;
