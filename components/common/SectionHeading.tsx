interface Props {
  categorySubheading: string;
  headingCategory: string;
}

export const SectionHeading = ({
  categorySubheading,
  headingCategory,
}: Props) => (
  <>
    <p className="text-sm text-secondary-500 font-calibri">
      {categorySubheading}
    </p>
    <h3 className="text-xl font-montserrat font-bold text-primary-300 mb-5">
      {headingCategory}
    </h3>
  </>
);
