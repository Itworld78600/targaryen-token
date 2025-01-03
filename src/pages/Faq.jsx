import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { right, left } from "../components/SmallComponents/Images";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Faq() {
  const faqTextArray = [
    {
      head: "What is the purpose of the Targaryen Token token?",
      para: "Targaryen Tokentokens runs on Solana.",
    },
    {
      head: "How can I acquire Targaryen Token tokens?",
      para: "Targaryen Tokentokens can be acquired through Uniswap on the Ethereum network.",
    },
    {
      head: "Is there a maximum supply of Targaryen Token tokens?",
      para: "On the official Webiste",
    },
    {
      head: "How can I get involved with Targaryen Token?",
      para: "0.00018$",
    },
  ];

  const matches = useMediaQuery("(max-width:750px)");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      component="section"
      position={"relative"}
      id="faqs"
      pt={12}
      pb={6}
      sx={{ backgroundColor: "#000" }}
    >
      <Box sx={{ position: "relative", zIndex: 3 }}>
        <Typography
          sx={{
            fontFamily: "Zen Dots",
            fontSize: { xs: "24px", sm: "36.93px" },
            m: 0,
            textAlign: "center",
            lineHeight: { xs: "50px", sm: "60px" },
            color: "#fff",
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </Typography>
      </Box>
      <Box
        sx={{
          pb: 5,
          position: "relative",
          zIndex: 3,
        }}
      >
        <Container>
          <Grid
            container
            spacing={matches ? 2 : 3}
            justifyContent="center"
            mt={matches ? 2 : 3}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: { xs: "100%", margin: "auto" },
                }}
              >
                {faqTextArray.map(({ head, para }, i) => (
                  <Accordion
                    key={`panel${i + 1}`}
                    expanded={expanded === `panel${i + 1}`}
                    onChange={handleChange(`panel${i + 1}`)}
                    sx={{
                      "&.MuiAccordion-root:before": {
                        height: "0px !important",
                      },
                      "&.Mui-expanded": {
                        backgroundColor: "#230e0e",
                      },
                      width: "100%",
                      m: "auto",
                      borderRadius: "12px !important",
                      mb: 2,
                      backgroundColor: "#131313",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${i + 1}` ? (
                          <Box
                            sx={{
                              backgroundColor: "#230e0e",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              p: 2,
                              borderRadius: "10px",
                            }}
                          >
                            <KeyboardArrowDownIcon
                              sx={{ color: "#fff", fontSize: "24px" }}
                            />
                          </Box>
                        ) : (
                          <Box
                            sx={{
                              backgroundColor: "#131313",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              p: 2,
                              borderRadius: "10px",
                            }}
                          >
                            <KeyboardArrowDownIcon
                              sx={{ color: "#fff", fontSize: "24px" }}
                            />
                          </Box>
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Box
                        fontSize={matches ? "14px" : "16.06px"}
                        fontWeight={600}
                        px={matches ? 0 : 1}
                        py={1.5}
                        color="#fff"
                        fontFamily="Zen Dots"
                        lineHeight={"26px"}
                      >
                        <Box component="span">{head}</Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "transparent",
                      }}
                    >
                      <Box
                        px={matches ? 1 : 2}
                        py={1}
                        fontSize={{ xs: "14px", sm: "17.06px" }}
                        textAlign="left"
                        fontWeight="400"
                        color="#fff"
                        fontFamily="Montserrat"
                        lineHeight={"26px"}
                      >
                        {para}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="img"
        sx={{ position: "absolute", right: 0, top: 0, zIndex: 0 }}
        src={right}
        alt="right"
      />
      <Box
        component="img"
        sx={{ position: "absolute", left: 0, bottom: 0, zIndex: 0 }}
        src={left}
        alt="left"
      />
    </Box>
  );
}

export default Faq;
