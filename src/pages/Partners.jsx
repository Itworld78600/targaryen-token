import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from "../components/SmallComponents/Images";

function Partners() {
  return (
    <Box component="section" sx={{ backgroundColor: "#000", py: 8 }}>
      <Typography
        sx={{
          fontFamily: "Zen Dots",
          fontSize: {
            xs: "28px",
            sm: "36px",
          },
          color: "#fff",
          textAlign: "center",
          mb: 3,
        }}
      >
        PARTNERS
      </Typography>
      <Box>
        <Marquee
          speed={50}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            width="100%"
            gap={5}
          >
            <Box>
              <Box
                component="img"
                sx={{ width: "222px", maxWidth: "100%" }}
                src={partner1}
                alt="feature"
              />
            </Box>
            <Box>
              <Box
                component="img"
                sx={{ width: "222px", maxWidth: "100%" }}
                src={partner2}
                alt="feature"
              />
            </Box>
            <Box>
              <Box
                component="img"
                sx={{ width: "222px", maxWidth: "100%" }}
                src={partner3}
                alt="feature"
              />
            </Box>
            <Box>
              <Box
                component="img"
                sx={{ width: "222px", maxWidth: "100%" }}
                src={partner4}
                alt="feature"
              />
            </Box>
            <Box mr={4}>
              <Box
                component="img"
                sx={{ width: "222px", maxWidth: "100%" }}
                src={partner5}
                alt="feature"
              />
            </Box>
          </Box>
        </Marquee>
      </Box>
    </Box>
  );
}

export default Partners;
