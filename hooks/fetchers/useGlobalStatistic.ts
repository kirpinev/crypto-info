import useSWR from "swr";
import { ApiRoutes } from "enums";
import { getGlobalStatistic } from "api";

export const useGlobalStatistic = (initialData) => {
  const { data, error, mutate, isValidating } = useSWR(
    ApiRoutes.global,
    getGlobalStatistic,
    { initialData: initialData.data }
  );

  return {
    globalStatistic: data && data.data ? data.data : data,
    isLoading: !error && !data,
    isError: error,
    mutateGlobalStatistic: mutate,
    isValidating,
  };
};
