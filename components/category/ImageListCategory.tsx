interface Props {
  category: string;
}

export const ImageListCategory = ({ category }: Props) => (
  <div className="flex flex-col items-center">
    <img src="assets/Dog.png" className="mt-2 w-36 flex " alt="Dog category" />
    <p className="flex font-montserrat font-semibold text-base ml-6">
      {category}
    </p>
  </div>
);
