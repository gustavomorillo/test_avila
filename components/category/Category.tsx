import {
  CATEGORY_LIST,
  CATEGORY_SUBHEADING,
  HEADING_CATEGORY,
} from '../../utils';
import { ImageListCategory } from '.';
import { SectionHeading } from '../common';

export const Category = () => (
  <div className="mt-16">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_CATEGORY}
    />
    <div className="flex justify-between mt-4">
      {CATEGORY_LIST.map((category: string) => (
        <ImageListCategory category={category} key={category} />
      ))}
    </div>
  </div>
);
