import React from 'react';
import {
  CATEGORY_SUBHEADING,
  DESCRIPTION_SUBHEADING,
  HEADING_OUR_SERVICES,
  ServiceInt,
} from '../../utils';
import { servicesList } from '../../utils/Data';
import { SectionHeading } from '../common';
import { ServiceItem } from './ServiceItem';

export const Services = () => (
  <div className="mx-32 mt-20">
    <SectionHeading
      categorySubheading={CATEGORY_SUBHEADING}
      headingCategory={HEADING_OUR_SERVICES}
    />
    <p className="text-color-black font-calibri font-normal mb-5">
      {DESCRIPTION_SUBHEADING}
    </p>
    <div className="flex flex-wrap flex-1 justify-between">
      {servicesList.map(({ description, label }: ServiceInt) => (
        <ServiceItem label={label} description={description} key={label} />
      ))}
    </div>
  </div>
);
