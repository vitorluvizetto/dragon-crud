import React from "react";

import "./styles.scss";

interface IButton {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string | React.ReactElement;
}

const Button: React.FunctionComponent<IButton> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`primary-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  className: "",
};
