import {
  CATEGORY_SUBHEADING,
  HEADING_POPULAR_PRODUCTS,
  ProductItemInt,
} from '../../utils';
import { PopularProductsList } from '../../utils/Data';
import { SectionHeading } from '../common';
import { ProductItem } from './ProductItem';

export const PopularProducts = () => (
  <div>
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_POPULAR_PRODUCTS}
    />
    <div className="flex flex-row">
      {PopularProductsList.map(({ id, description, price }: ProductItemInt) => (
        <ProductItem description={description} price={price} key={id} />
      ))}
    </div>
  </div>
);
