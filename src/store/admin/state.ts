import { ServiceStatistics } from "../models/ServiceStatistics";

export type AdminState = typeof initialAdminState;

export const initialAdminState = {
  serviceStatistics: null as ServiceStatistics | null,
  serviceStatisticsFetching: false,
};
