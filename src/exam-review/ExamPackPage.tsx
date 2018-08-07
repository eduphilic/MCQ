import { entryImages } from "common/structures/entryImages";
import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "./actions";

import { SubscriptionCard } from "./components/SubscriptionCard";

type StateProps = {
  loading: boolean;
  loaded: boolean;
};

type DispatchProps = {
  fetchExamReviewData: () => any;
};

type Props = StateProps & DispatchProps;

type ExamPackPageState = {
  selectedSubscription: number | null;
};

class ExamPackPage extends Component<Props, ExamPackPageState> {
  state: ExamPackPageState = {
    selectedSubscription: null,
  };

  componentDidMount() {
    const { /* loading, */ loaded, fetchExamReviewData } = this.props;

    // if (loading || loaded) return;
    if (loaded) return;

    fetchExamReviewData();
  }

  render() {
    const { loaded } = this.props;

    if (!loaded) return <div>Loading...</div>;

    const subscriptions: [keyof typeof entryImages, string, boolean][] = [
      ["Officer", "NDA/ ACC", false],
      ["Army", "Soldier Tradesman", true],
      ["AirForce", "Group 'X' & 'Y': Med Asst Trade", false],
    ];

    return (
      <TwoColumnWrapper>
        <div>
          {subscriptions.map((subscription, index) => (
            <SubscriptionCard
              key={subscription[0]}
              imageUrl={entryImages[subscription[0]]}
              title={subscription[1]}
              subheader="Validity 31st Jan 2019"
              overline={subscription[2] ? "1 Free Test" : "10 Mock Tests Set"}
              stats={{
                Attempted: "02 Tests",
                Remaining: "08 Tests",
              }}
              onClick={() => this.handleSubscriptionClick(index)}
            />
          ))}
        </div>
        <div>Column 2</div>
      </TwoColumnWrapper>
    );
  }

  private handleSubscriptionClick = (subscriptionIndex: number) => {
    this.setState({ selectedSubscription: subscriptionIndex });
  };
}

const ExamPackPageContainer = connect<StateProps, DispatchProps, {}, State>(
  ({ examReview: { loaded, loading } }: State) => ({ loaded, loading }),
  {
    fetchExamReviewData: actions.loadPlaceholderData,
  },
)(ExamPackPage);
export { ExamPackPageContainer as ExamPackPage };

const TwoColumnWrapper = styled.div`
  display: flex;

  > * {
    width: 100%;
  }

  > *:last-child {
    display: none;
  }

  > div > *:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    > * {
      width: 50%;
    }

    > *:first-child {
      padding-right: ${({ theme }) => (theme.spacing.unit * 3) / 2}px;
    }

    > *:last-child {
      display: block;
      padding-left: ${({ theme }) => (theme.spacing.unit * 3) / 2}px;
    }
  }
`;
