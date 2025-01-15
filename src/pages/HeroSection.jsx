import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  bannerImg,
  feature_1,
  feature_2,
  feature_3,
  feature_4,
  logo2,
} from "../components/SmallComponents/Images";
import Marquee from "react-fast-marquee";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <Box
      sx={{
        background: `url('${bannerImg}')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        pt: 4,
        pb: 8,
      }}
    >
      <Container maxWidth={"xl"}>
        <Box mb={5}>
          <Header />
        </Box>
        <Grid container>
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
                variant="h1"
                sx={{
                  color: "#fff",
                  fontFamily: "Zen Dots",
                  fontSize: { xs: "36px", sm: "55px" },
                }}
              >
                prepare for war targaryen token presale
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                  my: 3,
                }}
              >
                Join the Targaryen revolution and become part of a community
                that is redefining the future of crypto while honoring a
                legendary bloodline. Hold tight, for the Targaryen Token is set
                to take over, bringing profits and opportunities to its loyal
                supporters.
              </Typography>
              <Box>
                <Button
                  sx={{
                    fontSize: "16px",
                    fontFamily: "Audiowide",
                    textTransform: "none",
                    color: "#fff",
                    border: "1.22px solid #DA5656",
                    borderRadius: "8px",
                    mr: 2,
                    transition: "1s ease-in-out",
                    background:
                      "linear-gradient(90deg, hsla(0, 0%, 12%, 1) 0%, hsla(0, 2%, 41%, 1) 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, hsla(0, 2%, 41%, 1) 0%, hsla(0, 0%, 12%, 1) 100%)",
                    },
                  }}
                >
                  Explore
                </Button>
                <Link
                  to={"whitepaper.pdf"}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <Button
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Audiowide",
                      textTransform: "none",
                      color: "#fff",
                      border: "1.22px solid #DA5656",
                      borderRadius: "8px",
                    }}
                  >
                    WhitePaper
                  </Button>
                </Link>
              </Box>
              {/* <Box
                sx={{
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
                  mt: 3.5,
                  py: 1,
                }}
              >
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
                        sx={{ width: "136px", maxWidth: "100%" }}
                        src={feature_1}
                        alt="feature"
                      />
                    </Box>
                    <Box>
                      <Box
                        component="img"
                        sx={{ width: "136px", maxWidth: "100%" }}
                        src={feature_2}
                        alt="feature"
                      />
                    </Box>
                    <Box>
                      <Box
                        component="img"
                        sx={{ width: "136px", maxWidth: "100%" }}
                        src={feature_3}
                        alt="feature"
                      />
                    </Box>
                    <Box mr={3}>
                      <Box
                        component="img"
                        sx={{ width: "136px", maxWidth: "100%" }}
                        src={feature_4}
                        alt="feature"
                      />
                    </Box>
                  </Box>
                </Marquee>
              </Box> */}
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
              <Box
                component="img"
                sx={{ maxWidth: "100%" }}
                src={logo2}
                alt="logo-2"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
