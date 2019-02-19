import React from "react";
import { useRecaptcha } from "../src/client/session";

export default () => {
  const recaptcha = useRecaptcha();

  /* tslint:disable-next-line:no-console */
  console.log({ recaptcha });

  return <div>Welcome</div>;
};
