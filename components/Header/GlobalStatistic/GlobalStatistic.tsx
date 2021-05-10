import { FC } from "react";
import { Box, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { InfoNumbers } from "./InfoNumbers";
import { GlobalInfoProps } from "./types";

export const GlobalStatistic: FC<GlobalInfoProps> = ({
  text,
  icon,
  fixed,
  label,
  iconColor,
  data,
  isValidating,
}): JSX.Element => {
  return (
    <Tooltip hasArrow label={label} aria-label={label}>
      <Flex alignItems="center" p={2}>
        <Icon as={icon} color={iconColor} />
        <Box w={2} />
        <Box
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
          }}
        >
          <Text fontWeight="bold">{text}:&nbsp;</Text>
        </Box>
        <InfoNumbers isValidating={isValidating} data={data} fixed={fixed} />
      </Flex>
    </Tooltip>
  );
};
