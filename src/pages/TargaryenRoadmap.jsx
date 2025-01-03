import { Container, Paper, Typography, Box } from "@mui/material";
import React from "react";
import { roadmapBg } from "../components/SmallComponents/Images";

function TargaryenRoadmap() {
  const data = [
    {
      title: "Token Development",
      timeline: "Months 1-2",
      content: [
        "Create business LLC",
        "Token Creation & Smart Contract Deployment.",
        "Conduct thorough auditing and security checks of the smart contract.",
        "Develop official website & white paper.",
        "Liquidity pool lock & Launch Targaryen Token (TGN) on Binance Smart Chain.",
      ],
    },
    {
      title: "Initial Community Building And Holders",
      timeline: "Months 3-6",
      content: [
        "Create all social media platforms.",
        "Engage with all crypto influencers.",
        "Launch presale tokens for 3 months for early investors.",
        "Get 5,000 Targaryen holders.",
      ],
    },
    {
      title: "Grow Holders & Prepare For Targaryen War",
      timeline: "Months 3-6",
      content: [
        "Release tokens for website for public fairly by 3 months.",
        "Get 10,000 Targaryen holders.",
        "Initiate war strategy between holders to build wealth for their community & future.",
      ],
    },
    {
      title: "Token Listing And Community Growth And Start War",
      timeline: "Months 12-13",
      content: [
        "Listing for all decentralized platform after year of token launch.",
        "Prepare war with all crypto coin, making ranking on exchanges.",
        "Get 20,000 Targaryen holders.",
        "Start looking for partnership with major film producers and writers for major film production.",
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#000",
        backgroundImage: `url('${roadmapBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", md: "100% 100%" },
        backgroundPosition: "center center",
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
              my: 4.5,
            }}
          >
            Targaryen Token is committed to continuous innovation, growth, and
            community development. Our roadmap is a blueprint for success,
            driving decentralized finance forward and integrating Targaryen
            Token across multiple platforms and ecosystems.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default TargaryenRoadmap;
