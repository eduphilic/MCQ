import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "./actions";

type StateProps = {
  loading: boolean;
  loaded: boolean;
};

type DispatchProps = {
  fetchExamReviewData: () => any;
};

type Props = StateProps & DispatchProps;

class ExamPackPage extends Component<Props> {
  componentDidMount() {
    const { /* loading, */ loaded, fetchExamReviewData } = this.props;

    // if (loading || loaded) return;
    if (loaded) return;

    fetchExamReviewData();
  }

  render() {
    const { loaded } = this.props;

    if (!loaded) return <div>Loading...</div>;

    return <div>Exam Pack Page Placeholder</div>;
  }
}

const ExamPackPageContainer = connect<StateProps, DispatchProps, {}, State>(
  ({ examReview: { loaded, loading } }: State) => ({ loaded, loading }),
  {
    fetchExamReviewData: actions.loadPlaceholderData,
  },
)(ExamPackPage);
export { ExamPackPageContainer as ExamPackPage };
