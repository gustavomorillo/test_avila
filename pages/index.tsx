import { Navbar } from '../components/navbar';
import { Category } from '../components/category';
import { MainProducts } from '../components/products';

const HomePage = () => (
  <div>
    <Navbar />
    <Category />
    <MainProducts />
  </div>
);

export default HomePage;
