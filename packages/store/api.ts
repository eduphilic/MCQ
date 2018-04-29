import { User } from "./models";

interface ApiClient {
  post: (
    endpoint: string,
    fields: Record<string, string>,
    authenticationToken?: string,
  ) => Promise<Record<string, any>>;

  get: (
    endpoint: string,
    authenticationToken?: string,
  ) => Promise<Record<string, any>>;
}

const dummyApiClient: ApiClient = {
  post: (endpoint, fields, _authenticationToken) =>
    new Promise((resolve, reject) => {
      let response: object;
      let error: string | null = null;

      switch (endpoint) {
        // Authenticate and receive api token/jwt.
        case "/session":
          if (fields.username !== "0000" || fields.password !== "admin") {
            error = "Invalid username or password.";
            break;
          }
          response = { authenticationToken: "admin-token" };
          break;

        default: {
          error = `Dummy API Client: Unexpected endpoint: ${endpoint}`;
          break;
        }
      }

      // Simulate network latency.
      setTimeout(() => {
        if (error) {
          reject(new Error(error));
          return;
        }
        resolve(response);
      }, 100);
    }),

  get: (endpoint, authenticationToken) =>
    new Promise((resolve, reject) => {
      let response: object;
      let error: string | null = null;

      if (!authenticationToken) {
        error = `Endpoint ${endpoint} required authentication.`;
      } else {
        switch (endpoint) {
          case "/me":
            const user: User =
              authenticationToken === "admin-token"
                ? {
                    id: "admin-id",
                    firstName: "John",
                    lastName: "Doe",
                    mobileNumber: "000-000-000",
                    isAdmin: true,
                  }
                : {
                    id: "user-id",
                    firstName: "John",
                    lastName: "Doe",
                    mobileNumber: "000-000-000",
                    isAdmin: true,
                  };
            response = user;
            break;

          default: {
            error = `Dummy API Client: Unexpected endpoint: ${endpoint}`;
            break;
          }
        }
      }

      // Simulate network latency.
      setTimeout(() => {
        if (error) {
          reject(new Error(error));
          return;
        }
        resolve(response);
        // TODO: Lower this latency, set at 2 seconds for development of login
        // form disabling.
      }, 2000);
    }),
};

export { dummyApiClient as api };
