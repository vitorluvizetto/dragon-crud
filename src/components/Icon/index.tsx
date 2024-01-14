import React from "react";

import "./styles.scss";

const Icon = ({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
}): React.ReactElement => {
  return <img className={className} id="icon" src={src} alt={alt} {...props} />;
};

export default Icon;
