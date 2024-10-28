import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import DSC_0226 from "../../assets/img_vet/carrosel01.png";
import DSC_0186 from "../../assets/img_vet/carrossel02.png";
import DSC_0185 from "../../assets/img_vet/carrosel03.png";

import "./HomeCarousel.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: DSC_0186,
  },
  {
    imgPath: DSC_0226,
  },
  {
    imgPath: DSC_0185,
  },
];

export default function HomeCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 550,
        flexGrow: 1,
        margin: "0 auto", // Centraliza o carrossel horizontalmente
        textAlign: "center", // Centraliza o conteúdo do carrossel
      }}
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box
            key={index}
            component="img"
            className="carousel-image"
            sx={{
              display: "block",
              overflow: "hidden",
              visibility:
                Math.abs(activeStep - index) <= 2 ? "visible" : "hidden",
              margin: "0 auto",
            }}
            src={step.imgPath}
            alt={`carousel-image-${index}`}
          />
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}
