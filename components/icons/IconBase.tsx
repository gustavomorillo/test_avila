export interface IconProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const IconBase = ({ className, children, onClick, style }: IconProps) => (
  <div
    onClick={onClick}
    className={className}
    aria-hidden="true"
    style={{ userSelect: 'none', ...style }}
  >
    {children}
  </div>
);

IconBase.defaultProps = {
  onClick: () => {},
  className: '',
  style: {},
};

IconBase.defaultProps = {
  children: null,
};
export default IconBase;
