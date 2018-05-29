import { Container } from "unstated";

export const syncPropsToContainer = (
  props: object,
  container: Container<any>,
) => {
  const update = {};

  Object.keys(props).forEach(key => {
    // @ts-ignore
    if (props[key] !== container.state[key]) update[key] = props[key];
  });
  if (Object.keys(update).length > 0) container.setState(update);
};
