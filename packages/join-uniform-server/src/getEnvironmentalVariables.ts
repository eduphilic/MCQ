import * as functions from "firebase-functions";
import * as yup from "yup";

export type EnvironmentalVariables = {
  koa: {
    key0: string;
    key1: string;
    cookie_expire_seconds: number;
    cookie_secret: string;
  };
  cloudinary: {
    cloud_name: string;
    api_key: string;
    api_secret: string;
    username: string;
  };
};

const schema = yup.object<EnvironmentalVariables>().shape({
  koa: yup
    .object<EnvironmentalVariables["koa"]>()
    .shape({
      key0: yup.string().required(),
      key1: yup.string().required(),
      cookie_expire_seconds: yup
        .number()
        .transform(value => parseInt(value, 10)),
      cookie_secret: yup.string().required(),
    })
    .required(),
  cloudinary: yup
    .object<EnvironmentalVariables["cloudinary"]>()
    .shape({
      cloud_name: yup.string().required(),
      api_key: yup.string().required(),
      api_secret: yup.string().required(),
      username: yup.string().required(),
    })
    .required(),
});

let environmentalVariables: EnvironmentalVariables | null = null;

export async function getEnvironmentalVariables() {
  if (environmentalVariables) return environmentalVariables;

  const config = functions.config();

  try {
    environmentalVariables = await schema.validate(config as any);
  } catch (e) {
    throw new Error(`There was a problem loading the environmental variables from the Firebase environment.
Ensure the appropriate variables were set.

Check README.md and see:
https://firebase.google.com/docs/functions/config-env

Validation error: ${e.message}
`);
  }

  return environmentalVariables;
}
