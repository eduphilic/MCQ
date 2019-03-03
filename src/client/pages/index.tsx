import Link from "next/link";
import React from "react";

export default () => {
  return (
    <div>
      Welcome
      <br />
      <Link href="/signup">
        <a>Sign Up</a>
      </Link>
    </div>
  );
};
