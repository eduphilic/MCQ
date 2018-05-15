import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { api } from "../api";
import { ServiceStatistics } from "../models/ServiceStatistics";
import { RootState } from "../rootState";

export type AdminActions =
  | FetchServiceStatisticsSuccess
  | FetchServiceStatisticsStatus;
type ThunkResult<R> = ThunkAction<Promise<R>, RootState, {}, AdminActions>;

// #region ServiceStatistics
export const FETCH_SERVICE_STATISTICS_SUCCESS =
  "FETCH_SERVICE_STATISTICS_SUCCESS";
export interface FetchServiceStatisticsSuccess
  extends Action<typeof FETCH_SERVICE_STATISTICS_SUCCESS> {
  serviceStatistics: ServiceStatistics;
}
const fetchServiceStatisticsSuccess = (
  serviceStatistics: ServiceStatistics,
): FetchServiceStatisticsSuccess => ({
  type: FETCH_SERVICE_STATISTICS_SUCCESS,
  serviceStatistics,
});

export const FETCH_SERVICE_STATISTICS_STATUS =
  "FETCH_SERVICE_STATISTICS_STATUS";
export interface FetchServiceStatisticsStatus
  extends Action<typeof FETCH_SERVICE_STATISTICS_STATUS> {
  fetching: boolean;
}
const fetchServiceStatisticsStatus = (
  fetching: boolean,
): FetchServiceStatisticsStatus => ({
  type: FETCH_SERVICE_STATISTICS_STATUS,
  fetching,
});

export const fetchServiceStatistics = (): ThunkResult<void> => async (
  dispatch,
  getState,
) => {
  const state = getState();

  try {
    if (state.admin.serviceStatistics) return;

    await dispatch(fetchServiceStatisticsStatus(true));
    const serviceStatistics: ServiceStatistics = (await api.get(
      "/admin/service_statistics",
      state.app.authenticationToken || undefined,
    )) as any;

    await dispatch(fetchServiceStatisticsSuccess(serviceStatistics));
  } catch (e) {
    /* tslint:disable-next-line:no-console */
    console.error(e);
    // TODO: Add app wipe network error
  }

  await dispatch(fetchServiceStatisticsStatus(false));
};
// #endregion
