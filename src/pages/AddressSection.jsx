import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  copyChain,
  favLogo,
  addressBg,
} from "../components/SmallComponents/Images";
import { ToastNotify } from "../components/SmallComponents/AppComponents";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function AddressSection() {
  const address = "0x718fE1Cb67275e9eC357fbe5793905bb4d8C1409";
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  const showAlert = (message, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };
  return (
    <Box
      sx={{
        mt: { xs: -0.9, sm: -1.3, md: -1.5, lg: -4.6, xl: -2.8 },
        background: `url('${addressBg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "bottom center",
        pb: 5,
      }}
    >
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container maxWidth="xl">
        <Box
          sx={{
            background: `#161616`,
            borderRadius: "15px",
            border: "1px solid #A10127",
            py: { xs: 1.5, sm: 2.5 },
            px: 4,
          }}
        >
          <Stack
            flexDirection={{ xs: "coloumn", md: "row" }}
            justifyContent={"center"}
            gap={3}
          >
            <Stack flexDirection={"row"} gap={1} flexGrow={1} height={"100%"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Box
                  component={"img"}
                  alt=""
                  src={favLogo}
                  width={{ xs: "40px", sm: "49px" }}
                />
              </Box>
              <Box sx={{ maxWidth: "80%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "12px", sm: "12px" },
                    fontWeight: "400",
                    color: "#5C5C5C",
                  }}
                >
                  CONTRACT ADDRESS
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "10px", sm: "15px" },
                    fontWeight: "700",
                    color: "#ffffff",
                    mt: 1,
                    maxWidth: { xs: "75%", sm: "100%" },
                    wordWrap: "break-word",
                  }}
                >
                  {address}
                </Typography>
              </Box>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                mt: { xs: 1, md: 0 },
                flexGrow: 1,
                gap: { xs: 1.5, sm: 0 },
                justifyContent: "space-between",
              }}
            >
              <Stack flexDirection={"row"} gap={1}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: { xs: "12px", sm: "12px" },
                      fontWeight: "400",
                      color: "#5C5C5C",
                    }}
                  >
                    NETWORK
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: { xs: "12px", sm: "15px" },
                      fontWeight: "700",
                      color: "#ffffff",
                      mt: 1,
                    }}
                  >
                    Binance BEP-20
                  </Typography>
                </Box>
              </Stack>
              <Stack flexDirection={"row"} gap={1} alignItems={"center"}>
                <a
                  href="https://bscscan.com/address/0x718fE1Cb67275e9eC357fbe5793905bb4d8C1409#code"
                  target="_blank"
                >
                  <Box
                    component={"img"}
                    alt=""
                    src={copyChain}
                    width={{ xs: "35px", sm: "40px" }}
                  />
                </a>
                <Button
                  endIcon={<ContentCopyIcon />}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#5C5C5C",
                    fontFamily: "Montserrat",
                    fontSize: { xs: "12px", sm: "13px" },
                    fontWeight: "700",
                    width: { xs: "150px", sm: "180px" },
                    borderRadius: "30px",
                    height: "50px",
                    border: "1px solid #5C5C5C",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                    showAlert("Address Copied!", "success");
                  }}
                >
                  COPY ADDRESS
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default AddressSection;
