import { Formik } from "formik";
import React, { SFC } from "react";

export type SubscriptionManagePageProps = {};

type FormState = {
  selectedEntryIDs: string[];
};

const initialFormState: FormState = {
  selectedEntryIDs: [],
};

const onSubmitPlaceholder = (values: any) => {
  /* tslint:disable-next-line:no-console */
  console.log("values", values);
};

export const SubscriptionManagePage: SFC<SubscriptionManagePageProps> = () => {
  return (
    <Formik initialValues={initialFormState} onSubmit={onSubmitPlaceholder}>
      {() => <div>Placeholder</div>}
    </Formik>
  );
};
