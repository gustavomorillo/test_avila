import {
  CATEGORY_LIST,
  CATEGORY_SUBHEADING,
  HEADING_CATEGORY,
} from '../../utils';
import { ImageListCategory } from '.';

export const Category = () => (
  <div className="mx-32">
    <p className="text-xs text-secondary-500">{CATEGORY_SUBHEADING} </p>
    <h3 className="text-xl font-montserrat font-bold text-primary-300">
      {HEADING_CATEGORY}
    </h3>
    <div className="flex justify-between mt-4">
      {CATEGORY_LIST.map((category: string) => (
        <ImageListCategory category={category} />
      ))}
    </div>
  </div>
);
