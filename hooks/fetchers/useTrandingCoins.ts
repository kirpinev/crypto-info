import useSWR from "swr";
import { ApiRoutes } from "enums";
import { getTrandingCoins } from "api";

export const useTrandingCoins = () => {
  const { data, error, mutate, isValidating } = useSWR(
    ApiRoutes.trandingCoins,
    getTrandingCoins
  );

  return {
    trandingCoins: data,
    isLoading: !error && !data,
    isError: error,
    mutateTrandingCoins: mutate,
    isValidating,
  };
};
