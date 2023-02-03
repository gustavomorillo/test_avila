import {
  CATEGORY_SUBHEADING,
  HEADING_POPULAR_PRODUCTS,
  ProductItemInt,
} from '../../utils';
import { ProductItems } from '../../utils/Data';
import { SectionHeading } from '../common';
import { ProductItem } from './ProductItem';

export const PopularProducts = () => (
  <div className=" mx-32">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_POPULAR_PRODUCTS}
    />
    <div className="flex flex-row">
      {ProductItems.map(({ id, description, price }: ProductItemInt) => (
        <ProductItem description={description} price={price} key={id} />
      ))}
    </div>
  </div>
);
