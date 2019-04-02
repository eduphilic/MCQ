import { BehaviorSubject } from "rxjs";

export const resourceBaseUrl$ = new BehaviorSubject(
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/dev"
    : "https://production",
).asObservable();
