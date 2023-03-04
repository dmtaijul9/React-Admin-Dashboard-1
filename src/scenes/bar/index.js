import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="BAR" subtitle="Bar chart visualisation" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
