interface Props {
  label: string;
  link: string;
}

export const Links = ({ label, link }: Props) => (
  <li>
    <a
      href={link}
      className="font-montserrat font-medium text-secondary-600 text-sm px-11 hover:text-secondary-700"
      aria-current="page"
    >
      {label}
    </a>
  </li>
);
