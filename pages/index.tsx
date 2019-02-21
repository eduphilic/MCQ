import React from "react";
import { useRecaptcha } from "../src/client/session";

export default () => {
  // @ts-ignore
  const recaptcha = useRecaptcha();

  return <div>Welcome</div>;
};
