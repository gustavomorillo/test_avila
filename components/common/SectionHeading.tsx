interface Props {
  categorySubheading: string;
  headingCategory: string;
}

export const SectionHeading = ({
  categorySubheading,
  headingCategory,
}: Props) => (
  <>
    <p className="text-xs text-secondary-500">{categorySubheading} </p>
    <h3 className="text-xl font-montserrat font-bold text-primary-300 mb-5">
      {headingCategory}
    </h3>
  </>
);
