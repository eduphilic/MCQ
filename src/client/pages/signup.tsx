// This needs to be imported first to initialize the new Material UI style
// engine.
import "../bootstrapMaterialUIStyles";

import Link from "next/link";
import React, { FormEvent } from "react";

export default function SignupPage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>

      <form onSubmit={handleSubmit}>
        <input name="email" type="email" />
        <input name="password" type="password" />
        <input name="passwordVerify" type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );

  function handleSubmit(_event: FormEvent<HTMLFormElement>) {
    //
  }
}
