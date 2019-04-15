export function handleError(err?: unknown) {
  if (err) {
    /* tslint:disable-next-line:no-console */
    console.error(err);
    process.exit(1);
  }
}
