import { entryImages } from "common/structures/entryImages";
import React, { Component, createRef, ReactNode } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "./actions";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { Button } from "components/Button";
import { Card } from "components/Card";
import { CardContent } from "components/CardContent";
import { CardHeader } from "components/CardHeader";
import { Dialog } from "components/Dialog";
import { DialogAppBar } from "components/DialogAppBar";
import { DialogContent } from "components/DialogContent";
import { Typography } from "components/Typography";
import { ExamReviewDialog } from "features/exam-review";
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

  private examReviewDialog = createRef<ExamReviewDialog>();

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
      <Card key={subscription[0]}>
        <CardHeader
          imageUrl={entryImages[subscription[0]]}
          title={subscription[1]}
          subheader="Validity 31st Jan 2019"
          overline={subscription[2] ? "1 Free Test" : "10 Mock Tests Set"}
        />
        <CardContent>
          <Grid container spacing={8}>
            <SubscriptionCardRow
              leftNode={<Typography variant="Subtitle2">Attempted</Typography>}
              rightNode={
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                  disabled={index > 1}
                  onClick={() =>
                    this.examReviewDialog.current!.openDialogForExam()
                  }
                >
                  02 Tests (Revise)
                </Button>
              }
            />
            <SubscriptionCardRow
              leftNode={<Typography variant="Subtitle2">Remaining</Typography>}
              rightNode={
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  fullWidth
                  disabled={index !== 1}
                  onClick={() => this.handleSubscriptionClick(index)}
                >
                  08 Tests (Attempt)
                </Button>
              }
            />
          </Grid>
        </CardContent>
      </Card>
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
                        // alert(`Revise: ${title}`),
                        this.examReviewDialog.current!.openDialogForExam(),
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
        <Grid container spacing={16}>
          <Grid item xs md={6}>
            <Grid container spacing={16}>
              {subscriptionCards.map((subscriptionCard, index) => (
                <Grid key={index} item>
                  {subscriptionCard}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid item md={6}>
              <Grid container spacing={16}>
                {testCards &&
                  testCards.map((testCard, index) => (
                    <Grid key={index} item xs={12}>
                      {testCard}
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>

        {selectedSubscription !== null && (
          <Dialog variant="fullScreenMobileHidden" open={dialogOpen}>
            <DialogAppBar
              title={subscriptions[selectedSubscription][1]}
              onCloseButtonClick={this.handleDialogClose}
            />

            <DialogContent>{testCards}</DialogContent>
          </Dialog>
        )}

        <ExamReviewDialog ref={this.examReviewDialog} />
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

const SubscriptionCardRow = (props: {
  leftNode: ReactNode;
  rightNode: ReactNode;
}) => (
  <Grid item xs={12}>
    <Grid container alignItems="center">
      <Grid item xs={6}>
        {props.leftNode}
      </Grid>
      <Grid item xs={6}>
        <Grid container justify="flex-end">
          <Grid item style={{ minWidth: 184 }}>
            {props.rightNode}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
