import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { bloodlineBg, flag } from "../components/SmallComponents/Images";

function Bloodline() {
  return (
    <Box
      component="section"
      sx={{
        background: `url('${bloodlineBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor: "#000000",
        py: { xs: 5, sm: 10 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{ maxWidth: "100%" }}
                src={flag}
                alt="flag"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "36px",
                    sm: "45px",
                  },
                  color: "#fff",
                  fontFamily: "Zen Dots",
                  lineHeight: "48px",
                }}
              >
                Targaryen
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "36px",
                    sm: "45px",
                  },
                  color: "#c71012",
                  fontFamily: "Zen Dots",
                  lineHeight: "48px",
                  mb: 3.5,
                }}
              >
                bloodline
              </Typography>
              <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                Targaryen Token (TGN) is a revolutionary meme coin built on the
                Binance Smart Chain (BSC), inspired by the rich and powerful
                legacy of House Targaryen from the world of Game of Thrones. As
                a smart contract-driven token, TGN blends the excitement of meme
                culture with the strength of blockchain technology, creating a
                unique investment opportunity for holders.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Bloodline;
