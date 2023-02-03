import {
  CATEGORY_SUBHEADING,
  HEADING_LAST_PRODUCTS,
  ProductItemInt,
} from '../../utils';
import { SectionHeading } from '../common';
import { ProductItem } from '.';

import { ProductItems } from '../../utils/Data';

export const LastProducts = () => (
  <div className="mt-20">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_LAST_PRODUCTS}
    />
    <div className="flex justify-between">
      <div className="w-full">
        <div>
          <div className="flex flex-wrap flex-row">
            {ProductItems.map(({ id, description, price }: ProductItemInt) => (
              <ProductItem description={description} price={price} key={id} />
            ))}
          </div>
        </div>
      </div>
      <img
        src="assets/CatAd.png"
        className="flex fixedHeightAd "
        alt="Cat advertise"
      />
    </div>
  </div>
);
