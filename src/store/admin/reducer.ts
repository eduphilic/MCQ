import { Reducer } from "redux";
import * as actions from "./actions";
import { AdminState, initialAdminState } from "./state";

export const adminReducer: Reducer<AdminState, actions.AdminActions> = (
  state = initialAdminState,
  action,
): AdminState => {
  switch (action.type) {
    case actions.FETCH_SERVICE_STATISTICS_SUCCESS:
      return {
        ...state,
        serviceStatistics: action.serviceStatistics,
      };

    case actions.FETCH_SERVICE_STATISTICS_STATUS:
      return {
        ...state,
        serviceStatisticsFetching: action.fetching,
      };

    default:
      return state;
  }
};
