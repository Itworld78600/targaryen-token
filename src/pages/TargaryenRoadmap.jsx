import React from "react";
import { roadmapBg } from "../components/SmallComponents/Images";
import { Box, Container, Typography } from "@mui/material";

function TargaryenRoadmap() {
  return (
    <Box
      id="roadmap"
      component="section"
      sx={{
        backgroundColor: "#000",
        backgroundImage: `url('${roadmapBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", md: "100% 100%" },
        backgroundPosition: "center center",
        pt: 8,
        pb: 5,
      }}
    >
      <Container maxWidth={"xl"}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "36px" },
              color: "#fff",
              fontFamily: "Zen Dots",
              textAlign: "center",
              maxWidth: "850px",
              mx: "auto",
              position: "relative",
              zIndex: 3,
              py: 1,
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            Targaryen roadmap
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              maxWidth: "1100px",
              mx: "auto",
              zIndex: 3,
              my: 7,
            }}
          >
            Targaryen Token is committed to continuous innovation, growth, and
            community development. Our roadmap is a blueprint for success,
            driving decentralized finance forward and integrating Targaryen
            Token across multiple platforms and ecosystems.
          </Typography>
        </Box>

        <Box>
          <Box className="timeline-container">
            <Box className="timeline-item">
              <Box className="timeline-header">Token Development</Box>
              <Box className="timeline-content">
                <Typography variant="h3" my={3}>
                  (Months 1-2)
                </Typography>
                <Box component="ul">
                  <Box component="li"> -Create business LLC</Box>
                  <Box component="li">
                    -Token Creation & Smart Contract Deployment.
                  </Box>
                  <Box component="li">
                    - Conduct thorough auditing and security checks of the smart
                    contract.
                  </Box>
                  <Box component="li">
                    -Develop official website & white paper.
                  </Box>
                  <Box component="li">
                    - Liquidity pool lock & Launch Targaryen Token (TGN) on
                    Binance Smart chain.
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="timeline-item">
              <Box className="timeline-header">
                Initial Community Building And Holders
              </Box>
              <Box className="timeline-content">
                <Typography variant="h3" my={3}>
                  (Months 3-6)
                </Typography>
                <Box component="ul">
                  <Box component="li"> -Create all social media platforms.</Box>
                  <Box component="li">-Engage with all crypto influencers.</Box>
                  <Box component="li">
                    - Launch presale tokens for 3 months for early investors.
                  </Box>
                  <Box component="li"> -Get 5,000 Targaryen holders.</Box>
                  <Box component="li">
                    {" "}
                    -Update information for token on BScscan.
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="timeline-item">
              <Box className="timeline-header">
                Grow Holders & Prepare For Targaryen War
              </Box>
              <Box className="timeline-content">
                <Typography variant="h3" my={3}>
                  (Months 3-6)
                </Typography>
                <Box component="ul">
                  <Box component="li">
                    - Release tokens for website for public fairly buy after
                    presale for 3 months.
                  </Box>
                  <Box component="li"> -Get 10,000 Targaryen holders.</Box>
                  <Box component="li">
                    - Initiate war strategy between holders to build wealth for
                    core community & future.
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className="timeline-item">
              <Box className="timeline-header">
                Token Listing And Community Growth And Start War
              </Box>
              <Box className="timeline-content">
                <Typography variant="h3" my={3}>
                  (Months 12-13)
                </Typography>
                <Box component="ul">
                  <Box component="li">
                    - Listing for all decentralized platform after year of token
                    launch.
                  </Box>
                  <Box component="li">
                    - Prepare war with all crypto coin, making ranking on
                    exchanges.
                  </Box>
                  <Box component="li"> -Get 20,000 Targaryen holders.</Box>
                  <Box component="li">
                    - Start looking for partnership with major film, producers
                    and writers for major film production.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TargaryenRoadmap;
