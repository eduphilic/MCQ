import React from "react";
import { useRecaptcha } from "../session";

export default () => {
  const recaptcha = useRecaptcha();
  /* tslint:disable-next-line:no-console */
  console.log({ recaptcha });

  return <div>Welcome</div>;
};
