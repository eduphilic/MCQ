import adler from "adler-32";

export function urlHashCodeEncode(text: string) {
  let hexEncoded = adler.str(text.trim().toLowerCase()).toString(16);
  if (hexEncoded.length % 2 !== 0) hexEncoded = `0${hexEncoded}`;

  return encodeURIComponent(hexEncoded);
}
