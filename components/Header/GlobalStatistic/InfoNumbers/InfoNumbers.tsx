import { FC } from "react";
import { InfoNumbersProps } from "./types";
import { Skeleton, Text } from "@chakra-ui/react";

export const InfoNumbers: FC<InfoNumbersProps> = ({
  isValidating,
  data,
  fixed,
}): JSX.Element => {
  if (isValidating) {
    return <Skeleton height="16px" width="30px" />;
  }

  return <Text>{`${fixed ? data.toFixed(2) : data}`}</Text>;
};
