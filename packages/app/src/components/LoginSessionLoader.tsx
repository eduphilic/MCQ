import { Component } from "react";
import { connect } from "react-redux";
import { actions, RootState } from "store";

let loadAttempted = false;

export interface LoginSessionLoaderProps {
  user: RootState["app"]["user"];
  loginSessionLoad: () => any;
}

/**
 * Kicks off the session resuming functionality. Issues a request to the store
 * to attempt to load the session token from local storage.
 */
class LoginSessionLoader extends Component<LoginSessionLoaderProps> {
  constructor(props: LoginSessionLoaderProps) {
    super(props);

    if (loadAttempted) return;
    loadAttempted = true;
    if (props.user) return;
    props.loginSessionLoad();
  }

  render() {
    return null;
  }
}

const mapStateToProps = ({ app }: RootState) => ({
  user: app.user,
});

const mapDispatchToProps = {
  loginSessionLoad: actions.app.loginSessionLoad,
};

const ConnectedLoginSessionLoader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginSessionLoader);

export { ConnectedLoginSessionLoader as LoginSessionLoader };
