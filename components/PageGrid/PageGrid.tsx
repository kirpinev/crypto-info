import { Grid, Box } from "@chakra-ui/react";
import { PageGridTypes } from "./types";
import { FC } from "react";

export const PageGrid: FC<PageGridTypes> = ({ children }): JSX.Element => (
  <Box w="100%" maxWidth="1280px" mx="auto">
    <Grid templateColumns="repeat(12, 1fr)" gap={2}>
      {children}
    </Grid>
  </Box>
);
