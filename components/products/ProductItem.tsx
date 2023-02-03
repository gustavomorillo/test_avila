import { ADD } from '../../utils';
import { RatingIcons, ShoppingCartInBtn } from '../icons';

interface Props {
  description: string;
  price: number;
}

export const ProductItem = ({ description, price }: Props) => (
  <div className="mb-16 mx-9">
    <img src="assets/MainProduct.png" className="block" alt="Main product" />
    <p className="font-montserrat text-sm text-color-black mt-7">
      {description}
    </p>
    <RatingIcons />
    <p className="font-worksans text-neutral-600 text-xs font-normal mb-4">
      {price}
    </p>
    <button
      className="bg-primary-300 py-1.5 px-4 text-color-white rounded font-montserrat text-xs flex mx-auto my-0"
      type="button"
    >
      <ShoppingCartInBtn className="mr-2 mt-0.5" />
      {ADD}
    </button>
  </div>
);
