import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

import "./styles.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { name, type, label, ...props },
  ref
): React.ReactElement => (
  <div className="input-container">
    <label className="input-container__label" htmlFor={name}>
      {label}
    </label>
    <input
      className="input-container__input"
      id={name}
      type={type}
      ref={ref}
      {...props}
    />
  </div>
);

const ForwardedInput = forwardRef(Input);

export { ForwardedInput as Input };
