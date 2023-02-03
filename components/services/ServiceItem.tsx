interface Props {
  label: string;
  description: string;
}

export const ServiceItem = ({ label, description }: Props) => (
  <div className="max-w-xs mb-12 mt-6">
    <img src="assets/DogOnly.png" alt="Dog white and blank" />
    <p className="font-montserrat font-semibold text-normal text-color-black">
      {label}
    </p>
    <p className="font-montserrat font-normal text-sm text-color-black font-calibri">
      {description}
    </p>
  </div>
);
