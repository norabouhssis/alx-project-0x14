import React from "react";

const Button: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

export default Button;