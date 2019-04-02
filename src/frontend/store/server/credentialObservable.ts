import { BehaviorSubject } from "rxjs";

// TODO: Wire up credential manager.
export const credential$ = new BehaviorSubject<string | null>(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdUbTV6S3ZPWHVmb3NBUXRqVjhjQzBSdEJNbDIiLCJpYXQiOjE1NTM3OTg3NjksImV4cCI6MTU2MTU3NDc2OX0.AtBeqfcma2rdGglkh_yXEWXzT-lW-iugsLWWBYLwUPE",
);
