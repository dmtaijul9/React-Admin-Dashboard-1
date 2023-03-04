import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { Box } from "@mui/system";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box display="flex" flexDirection="column" gap="20px">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              tempore, voluptatem quam officia corrupti nemo, laborum maiores
              repudiandae vitae quo laudantium deserunt. Quia atque qui nesciunt
              sit accusamus sapiente accusantium?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
