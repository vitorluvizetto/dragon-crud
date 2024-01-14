import React, {
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

import "./styles.scss";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, ITextArea> = (
  { name, label, ...props },
  ref
): React.ReactElement => (
  <div className="text-area-container">
    <label className="text-area-container__label" htmlFor={name}>
      {label}
    </label>
    <textarea
      className="text-area-container__input"
      id={name}
      ref={ref}
      {...props}
    />
  </div>
);

const ForwardedTextArea = forwardRef(TextArea);

export { ForwardedTextArea as TextArea };
