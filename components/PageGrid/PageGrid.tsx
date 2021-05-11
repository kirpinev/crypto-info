import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { PageGridTypes } from "./types";

export const PageGrid: FC<PageGridTypes> = ({ children }): JSX.Element => (
  <Box w="100%" maxWidth="1280px" mx="auto">
    {children}
  </Box>
);
