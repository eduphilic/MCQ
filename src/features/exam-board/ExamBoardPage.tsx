import { entryImages } from "common/structures/entryImages";
import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import styled from "styled";
import { actions } from "./actions";

import { Dialog } from "components/Dialog";
import { DialogAppBar } from "components/DialogAppBar";
import { DialogContent } from "components/DialogContent";
import { SubscriptionCard } from "./components/SubscriptionCard";

type StateProps = {
  loading: boolean;
  loaded: boolean;
};

type DispatchProps = {
  fetchExamReviewData: () => any;
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;

type ExamBoardPageState = {
  selectedSubscription: number | null;
  dialogOpen: boolean;
};

class ExamBoardPage extends Component<Props, ExamBoardPageState> {
  state: ExamBoardPageState = {
    selectedSubscription: null,
    dialogOpen: false,
  };

  componentDidMount() {
    const { /* loading, */ loaded, fetchExamReviewData } = this.props;

    // if (loading || loaded) return;
    if (loaded) return;

    fetchExamReviewData();
  }

  render() {
    const { loaded } = this.props;
    const { selectedSubscription, dialogOpen } = this.state;

    if (!loaded) return <div>Loading...</div>;

    const subscriptions: [keyof typeof entryImages, string, boolean][] = [
      ["Officer", "NDA/ ACC", false],
      ["Army", "Soldier Tradesman", true],
      ["AirForce", "Group 'X' & 'Y': Med Asst Trade", false],
    ];

    const subscriptionCards = subscriptions.map((subscription, index) => (
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
    ));

    const testCards =
      selectedSubscription === null
        ? null
        : Array.from({ length: 10 }, (_, index) => {
            const subscription = subscriptions[selectedSubscription];
            const title = `${subscription[1]} Test ${index + 1}`;

            return (
              <SubscriptionCard
                key={`${subscription[0]}-${index}`}
                imageUrl={entryImages[subscription[0]]}
                title={title}
                subheader="Validity 31st Jan 2019"
                stats={{
                  Attempts: "2345 Users",
                  Score: "75/200",
                  Rank: "733/ Out 2345",
                }}
                onReviseButtonClick={
                  index === 0
                    ? this.createDialogCloseHandlerWrapper(() =>
                        alert(`Revise: ${title}`),
                      )
                    : undefined
                }
                onAttemptButtonClick={
                  index === 1
                    ? this.createDialogCloseHandlerWrapper(() =>
                        alert(`Attempt: ${title}`),
                      )
                    : undefined
                }
                showDisabledExpiredButton={index > 1}
              />
            );
          });

    return (
      <>
        <TwoColumnWrapper>
          <div>{subscriptionCards}</div>
          <div>{testCards}</div>
        </TwoColumnWrapper>

        {selectedSubscription !== null && (
          <Dialog variant="fullScreenMobileHidden" open={dialogOpen}>
            <DialogAppBar
              title={subscriptions[selectedSubscription][1]}
              onCloseButtonClick={this.handleDialogClose}
            />

            <DialogContent>{testCards}</DialogContent>
          </Dialog>
        )}
      </>
    );
  }

  private handleSubscriptionClick = (subscriptionIndex: number) => {
    this.setState({
      selectedSubscription: subscriptionIndex,
      dialogOpen: true,
    });
  };

  private handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  private createDialogCloseHandlerWrapper = (fn: () => any) => {
    return () => {
      this.handleDialogClose();
      return fn();
    };
  };
}

const ExamBoardPageContainer = connect<
  StateProps,
  DispatchProps,
  OwnProps,
  State
>(
  ({ examBoard: { loaded, loading } }: State) => ({ loaded, loading }),
  {
    fetchExamReviewData: actions.loadPlaceholderData,
  },
)(ExamBoardPage);
export { ExamBoardPageContainer as ExamBoardPage };

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
