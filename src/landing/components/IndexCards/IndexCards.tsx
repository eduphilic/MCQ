import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from "store";
import { actions } from "../../actions";

import { createIndexCardEntryPlaceholders } from "../../placeholders/createIndexCardEntryPlaceholders";

type StateProps = Pick<
  State["landing"],
  "indexCardEntries" | "indexCardEntryCategories" | "indexCardColors"
>;

type DispatchProps = {
  fetchIndexCardEntries: () => any;
};

type OwnProps = {};
export { OwnProps as IndexCardsProps };

type Props = StateProps & DispatchProps & OwnProps;

class IndexCards extends Component<Props> {
  componentDidMount() {
    const {
      indexCardEntries,
      indexCardEntryCategories,
      indexCardColors,
      fetchIndexCardEntries,
    } = this.props;
    if (!indexCardEntries || !indexCardEntryCategories || !indexCardColors) {
      fetchIndexCardEntries();
    }
  }

  render() {
    const {
      indexCardEntries,
      indexCardEntryCategories,
      indexCardColors,
    } = this.props;
    if (!indexCardEntries || !indexCardEntryCategories || !indexCardColors) {
      return null;
    }

    /* tslint:disable-next-line:no-console */
    console.log("indexCardEntries", indexCardEntries);

    /* tslint:disable-next-line:no-console */
    console.log("indexCardEntryCategories", indexCardEntryCategories);

    /* tslint:disable-next-line:no-console */
    console.log("indexCardColors", indexCardColors);

    return (
      <>
        <div>Placeholder</div>
      </>
    );
  }
}

const indexCardEntryPlaceholders = createIndexCardEntryPlaceholders();

const IndexCardsContainer = connect<StateProps, DispatchProps, OwnProps, State>(
  ({
    landing: { indexCardEntryCategories, indexCardEntries, indexCardColors },
  }) => ({
    indexCardEntries,
    indexCardEntryCategories,
    indexCardColors,
  }),
  {
    fetchIndexCardEntries: () =>
      actions.fetchIndexCardEntriesSuccess(
        indexCardEntryPlaceholders.indexCardEntries,
        indexCardEntryPlaceholders.indexCardEntryCategories,
        indexCardEntryPlaceholders.indexCardColors,
      ),
  },
)(IndexCards);
export { IndexCardsContainer as IndexCards };
