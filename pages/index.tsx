import { Navbar } from '../components/navbar';
import { Category } from '../components/category';
import {
  LastProducts,
  MainProducts,
  PopularProducts,
} from '../components/products';

const HomePage = () => (
  <div>
    <Navbar />
    <Category />
    <MainProducts />
    <PopularProducts />
    <LastProducts />
  </div>
);

export default HomePage;
