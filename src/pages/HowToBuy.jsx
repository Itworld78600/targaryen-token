import { Box, Container, Typography } from "@mui/material";
import React from "react";
import {
  confirm,
  enter,
  htbBg,
  wallet,
} from "../components/SmallComponents/Images";

function HowToBuy() {
  return (
    <Box
      component="section"
      sx={{
        pt: 8,
        pb: 6,
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
        backgroundColor: "#000",
      }}
    >
      <Container maxWidth={"xl"}>
        <Typography
          sx={{
            fontSize: { xs: "36px", sm: "36px" },
            color: "#fff",
            textAlign: "center",
            fontFamily: "Zen Dots",
            mb: 8,
          }}
        >
          How to Buy
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: "270px",
              position: "relative",
              background: `url('${htbBg}')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              px: 5,
              pt: 5,
              pb: 3.5,
              maxWidth: { xs: "unset", sm: "270px" },
              minHeight: "125px",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translate(-50%,-0px)",
              }}
              src={wallet}
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "19px",
                fontFamily: "Zen Dots",
                color: "#fff",
                textAlign: "center",
                mt: 3.5,
                mb: 1.5,
              }}
            >
              Connect your wallet
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Click on „Connect Wallet“ and open your decentralized wallet to
              verify! Make sure you are on the Ethereum Network and have some
              ETH for fees ready.
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: "270px",
              position: "relative",
              background: `url('${htbBg}')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              px: 5,
              pt: 5,
              pb: 3.5,
              maxWidth: { xs: "unset", sm: "270px" },
              minHeight: "125px",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translate(-50%,-0px)",
              }}
              src={enter}
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "19px",
                fontFamily: "Zen Dots",
                color: "#fff",
                textAlign: "center",
                mt: 3.5,
                mb: 1.5,
              }}
            >
              Enter the amount
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Either enter the amount of you wish to receive or the amount of
              USDT or ETH you want to spend.
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: "270px",
              position: "relative",
              background: `url('${htbBg}')`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              px: 5,
              pt: 5,
              pb: 3.5,
              maxWidth: { xs: "unset", sm: "270px" },
              minHeight: "125px",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translate(-50%,-0px)",
              }}
              src={confirm}
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "19px",
                fontFamily: "Zen Dots",
                color: "#fff",
                textAlign: "center",
                mt: 3.5,
                mb: 1.5,
              }}
            >
              Confirm and Go
            </Typography>
            <Typography
              sx={{
                fontSize: "11px",
                color: "#fff",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              Now click on „Confirm“ and verify the transaction inside your
              wallet! Now wait for the presale to finish and come again to claim
              your account.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HowToBuy;
