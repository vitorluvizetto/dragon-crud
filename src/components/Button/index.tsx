import React from "react";

import "./styles.scss";

interface IButton {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string | React.ReactElement;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

const Button: React.FunctionComponent<IButton> = ({
  children,
  className,
  onClick,
  type,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`primary-button${disabled ? "--disabled" : ""} ${className}`}
      disabled={disabled}
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
