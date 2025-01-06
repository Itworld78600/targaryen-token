import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import {
  dragonMainImg,
  dragonImg,
  dragonbg1,
  dragonbg2,
  dragonbg3,
} from "../components/SmallComponents/Images";

function Dragonomics() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#000", pt: 5, pb: 8, position: "relative" }}
    >
      <Container maxWidth={"xl"}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "36px" },
              color: "#fff",
              fontFamily: "Zen Dots",
              textAlign: "center",
              maxWidth: "650px",
              mx: "auto",
              position: "relative",
              zIndex: 3,
              py: 1,
              background:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            DRAGONOMICS
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              color: "#fff",
              textAlign: "center",
              position: "relative",
              zIndex: 3,
              my: 4.5,
            }}
          >
            Just as the Targaryen dynasty ruled with unmatched power and
            influence, the TGN token is built to be a strong, sustainable
            digital asset. It will leverage its cultural relevance to
            continually grow its ecosystem, with profits from strategic
            investments in the entertainment industry helping to support the
            token’s long-term success. With every milestone and partnership, TGN
            holders stand to benefit, making this token not just a meme, but a
            valuable asset in the world of cryptocurrency.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <Box
            sx={{
              width: "417px",
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              flexGrow: 1,
              flexBasis: "300px",
              order: { xs: 2, md: 1 },
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    7.5%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    6 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${7.5}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Presale
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    6.25%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    5 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${6.25}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Project/investments
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    1.25%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    1 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${1.25}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Airdrops / giveaway
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    18.75%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    15 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${18.75}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Website drop
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "350px",
              maxWidth: "100%",
              flexGrow: 1,
              flexBasis: "300px",
              order: { xs: 1, md: 2 },
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box
              component="img"
              sx={{ maxWidth: "100%" }}
              src={dragonMainImg}
              alt=""
            />
          </Box>
          <Box
            sx={{
              width: "417px",
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              flexGrow: 1,
              flexBasis: "300px",
              order: { xs: 3, md: 3 },
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    3.75%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    3 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${3.75}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Team
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    6.25%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    5 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${6.25}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Advertisement
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    18.75%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    15 billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${18.75}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Dex exchanges
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  backgroundColor: "#161616",
                  border: "1px solid #232323",
                  padding: "1.25rem",
                  borderRadius: "7.42px",
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "19.75px",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    37.5%{" "}
                    <Box
                      component="img"
                      sx={{ maxWidth: "100%", ml: 1 }}
                      src={dragonImg}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "11.09px",
                      color: "#ffffff",
                      fontFamily: "Zen Dots",
                    }}
                  >
                    30 Billion
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      height: "17.88px",
                      background: "#2a2a2a",
                      border: "1px solid #404040",
                      mt: 1.2,
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Stack
                      height={"100%"}
                      alignItems={"start"}
                      justifyContent={"center"}
                      position={"relative"}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: `${37.5}%`,
                          borderRadius: "20px",
                          background:
                            "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
                          zIndex: 0,
                        }}
                      />
                    </Stack>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    fontSize: "11.09px",
                    fontFamily: "Zen Dots",
                    color: "#fff",
                    mt: 1.25,
                  }}
                >
                  Dragon burn
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        component="img"
        sx={{
          maxWidth: "100%",
          position: "absolute",
          top: "-50px",
          right: 0,
          zIndex: 0,
        }}
        src={dragonbg1}
        alt=""
      />
      <Box
        component="img"
        sx={{
          maxWidth: "100%",
          position: "absolute",
          top: "350px",
          left: 0,
          zIndex: 0,
        }}
        src={dragonbg2}
        alt=""
      />
      <Box
        component="img"
        sx={{
          maxWidth: "100%",
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 0,
        }}
        src={dragonbg3}
        alt=""
      />
    </Box>
  );
}

export default Dragonomics;
