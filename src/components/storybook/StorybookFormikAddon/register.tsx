import addons from "@storybook/addons";
// import addons, { AddonsApi } from "@storybook/addons";
// import { EventEmitter } from "events";
// import React, { Component } from "react";

// type Props = {
//   channel: EventEmitter;
//   api: AddonsApi;
//   active: boolean;
// };

// class Panel extends Component<Props> {
//   render() {
//     const { active } = this.props;

//     if (!active) return null;

//     return <div>Formik Addon</div>;
//   }
// }

addons.register("FORMIK", _api => {
  // addons.addPanel("FORMIK/panel", {
  //   title: "Formik",
  //   render: ({ active }) => (
  //     <Panel channel={addons.getChannel()} api={api} active={active} />
  //   ),
  // });
});
