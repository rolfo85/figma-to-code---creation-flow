import { Box, Stack } from "@mui/material";
import React from "react";
import { LeftContainerByAnima } from "./sections/LeftContainerByAnima";
import { SummaryByAnima } from "./sections/SummaryByAnima";
import { TopBarByAnima } from "./sections/TopBarByAnima";

export const CreationFlow = (): JSX.Element => {
  return (
    <Stack sx={{ bgcolor: "background.paper", height: "100vh" }}>
      <TopBarByAnima />
      <Box sx={{ display: "flex", width: "100%", flexGrow: 1, overflow: "hidden" }}>
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <LeftContainerByAnima />
        </Box>
        <SummaryByAnima />
      </Box>
    </Stack>
  );
};
