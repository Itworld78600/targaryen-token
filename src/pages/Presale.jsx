import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { presaleBg, presaleBoxBg } from "../components/SmallComponents/Images";
import PresaleBox from "../components/PresaleBox";

function Presale() {
  return (
    <Box
      id="presale"
      component="section"
      sx={{
        backgroundColor: "#000000",
        background: `url('${presaleBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        pt: { xs: 5, md: 12 },
        // pb: { xs: 2, md: 5 },
      }}
    >
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: `url('${presaleBoxBg}')`,
              backgroundPosition: "center center",
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
              pb: { xs: 2, md: 8 },
            }}
          >
            <Box sx={{ minWidth: "100%" }}>
              <PresaleBox />
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
              {/* <Box
                component="img"
                sx={{ maxWidth: "100%" }}
                src={flag}
                alt="flag"
              /> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          mt: 5,
          height: "13px",
          width: "100%",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></Box>
    </Box>
  );
}

export default Presale;
