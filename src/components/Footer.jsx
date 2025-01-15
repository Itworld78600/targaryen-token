import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  arrowDown,
  footerLogo,
  social_1,
  social_2,
  social_3,
  social_4,
  social_5,
  social_6,
} from "./SmallComponents/Images";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      id="contact-us"
      component="section"
      sx={{ backgroundColor: "#000", pt: { xs: 2, md: 5 } }}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={{ xs: 3, md: 5 }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{ width: "457px", maxWidth: "100%" }}
                src={footerLogo}
                alt="footer logo"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: { xs: "start", md: "center" },
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="a"
                href={"#presale"}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "120px",
                    mt: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                  >
                    Presale
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontSize: "11.25px",
                      textTransform: "uppercase",
                      color: "#000",
                      backgroundColor: "#F991A9",
                      borderRadius: "42px",
                      px: 0.75,
                      py: 0.2,
                    }}
                  >
                    Live
                  </Box>
                </Box>
              </Box>
              <Box
                component="a"
                href={"whitepaper.pdf"}
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "120px",
                    mt: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                  >
                    WHITEPAPER
                  </Box>
                </Box>
              </Box>
              <Box
                component="a"
                href={"#about"}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "120px",
                    mt: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                  >
                    ABOUT
                  </Box>
                </Box>
              </Box>
              <Box
                component="a"
                href={"#roadmap"}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "120px",
                    mt: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                  >
                    ROADMAP
                  </Box>
                </Box>
              </Box>
              <Box
                component="a"
                href={"#tokenomics"}
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minWidth: "120px",
                    mt: 2.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#fff",
                      textTransform: "uppercase",
                      fontSize: "15px",
                    }}
                  >
                    TOKENOMICS
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: { xs: "start", md: "center" },
              alignItems: "center",
            }}
          >
            <Box>
              {/* <Typography sx={{ mb: 2 }}>
                <Link
                  to={"tel:78678786784"}
                  style={{
                    textDecoration: "none",
                    color: "#7E7E7E",
                    fontSize: "17px",
                  }}
                >
                  78678786784
                </Link>
              </Typography> */}
              <Typography sx={{ mb: 2 }}>
                <Link
                  to={"mailto:Targaryentoken9@gmail.com"}
                  style={{
                    textDecoration: "none",
                    color: "#7E7E7E",
                    fontSize: "17px",
                  }}
                >
                  Targaryentoken9@gmail.com
                </Link>
              </Typography>
              {/* <Typography sx={{ mb: 3.5, color: "#7E7E7E", fontSize: "17px" }}>
                Stamford Street, London SE19LS Greater London, England
              </Typography> */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                  <a href="https://t.me/+PlbzfZY6HV02NThh" target="_blank">
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_1}
                      alt="social 1"
                    />
                  </a>
                </Box>
                <Box>
                  <a href="https://x.com/targaryentoken?s=21" target="_blank">
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_2}
                      alt="social 2"
                    />
                  </a>
                </Box>
                {/* <Box>
                  <Link to={"#"}>
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_3}
                      alt="social 3"
                    />
                  </Link>
                </Box>
                <Box>
                  <Link to={"#"}>
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_4}
                      alt="social 4"
                    />
                  </Link>
                </Box>
                <Box>
                  <Link to={"#"}>
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_5}
                      alt="social 5"
                    />
                  </Link>
                </Box> */}
                <Box>
                  <a href="https://discord.gg/EKXrUybc" target="_blank">
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%" }}
                      src={social_6}
                      alt="social 6"
                    />
                  </a>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          py: 3,
          mt: { xs: 5, md: 8 },
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{ color: "#fff", fontSize: "16px", textTransform: "uppercase" }}
        >
          ©{currentYear} ― TARGARYEN TOKEN.ALL RIGHTS RESERVED.
        </Typography>
        <Typography
          sx={{ color: "#fff", fontSize: "16px", textTransform: "uppercase" }}
        >
          TERMS & CONDITIONS•PRIVACY POLICY
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
