export const ListItem = ({ children }) => (
  <li className="font-calibri text-base text-secondary-500 mb-2.5 cursor-pointer">
    {children}
  </li>
);

export const HeadingList = ({ children }) => (
  <h3 className="mb-5 text-primary-300 font-montserrat font-semibold text-lg">
    {children}
  </h3>
);
