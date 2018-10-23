import { Fade } from "@material-ui/core";
import React, { Component, ComponentType } from "react";
import { ChildProps } from "react-apollo";
import { LoadingSpinner } from "./LoadingSpinner";

export const withLoading = <P extends ChildProps>(C: ComponentType<P>) =>
  class WithLoading extends Component<P> {
    render() {
      const loading = this.props.data!.loading;

      return loading ? (
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? "800ms" : "0ms",
          }}
        >
          <LoadingSpinner />
        </Fade>
      ) : (
        <C {...this.props} />
      );
    }
  };
