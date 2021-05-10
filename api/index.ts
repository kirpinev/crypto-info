import axios, { AxiosResponse } from "axios";
import { ApiRoutes } from "enums";

const api = axios.create({
  baseURL: ApiRoutes.baseURL,
});

export const getGlobalStatistic = () =>
  api
    .get(ApiRoutes.global)
    .then((res: AxiosResponse<Response>): any => res.data);

export const getTrandingCoins = () =>
  api
    .get(ApiRoutes.trandingCoins)
    .then((res: AxiosResponse<Response>): any => res.data);
