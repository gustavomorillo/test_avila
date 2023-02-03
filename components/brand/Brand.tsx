import {
  CATEGORY_SUBHEADING,
  DESCRIPTION_SUBHEADING,
  HEADING_BEST_BRANDS,
} from '../../utils';
import { SectionHeading } from '../common';

export const Brand = () => (
  <div className="mt-32 mb-44">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_BEST_BRANDS}
    />
    <div className="flex justify-between">
      <p
        className="text-color-black font-calibri font-normal mb-5"
        style={{ maxWidth: 360 }}
      >
        {DESCRIPTION_SUBHEADING}
      </p>
      <img src="assets/brand.png" alt="marca1" />
      <img src="assets/brand.png" alt="marca2" />
      <img src="assets/brand.png" alt="marca3" />
      <img src="assets/brand.png" alt="marca4" />
    </div>
  </div>
);
