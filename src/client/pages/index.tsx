import React from "react";
import { useRecaptcha } from "../session";

export default () => {
  // @ts-ignore
  const recaptcha = useRecaptcha();

  return <div>Welcome</div>;
};
