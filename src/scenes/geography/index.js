import { Box } from "@mui/material";
import React from "react";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geopgraphy Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
