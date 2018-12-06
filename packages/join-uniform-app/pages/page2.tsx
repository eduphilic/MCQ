import Link from "next/link";
import React from "react";

export default function() {
  return (
    <p>
      Page 2<br />
      <br />
      <Link href="/">
        <a>Index</a>
      </Link>
    </p>
  );
}
