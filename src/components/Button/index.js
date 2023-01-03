import React from "react";
import { Button as Btn } from "./styles";

function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}

export default Button;
