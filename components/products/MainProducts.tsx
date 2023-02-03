import {
  CATEGORY_SUBHEADING,
  HEADING_MAIN_PRODUCTS,
  ProductItemInt,
} from '../../utils';
import { SectionHeading } from '../common';
import { ProductItem } from '.';

import { ProductItems } from '../../utils/Data';

export const MainProducts = () => (
  <div className=" mt-20">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_MAIN_PRODUCTS}
    />
    <div className="flex justify-between">
      <img
        src="assets/CatAd.png"
        className="flex mr-5 fixedHeightAd"
        alt="Cat advertise"
      />
      <div className="w-full">
        <div>
          <div className="flex flex-wrap flex-row">
            {ProductItems.map(({ id, description, price }: ProductItemInt) => (
              <ProductItem description={description} price={price} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
