import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import TimerCountDown from "./SmallComponents/PresaleTimer";
import {
  reverseImg,
  ethIcon,
  usdtIcon,
  cardIcon,
} from "./SmallComponents/Images";

function PresaleBox() {
  const [buyingToken, setBuyingToken] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [recivedTokens, setreceivedTokens] = useState(0);
  const handleInputChange = (event) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        border: "2px solid #514F4F",
        borderRadius: "27px",
        backdropFilter: "blur(16px)",
        backgroundColor: "rgba(33,26,28,0.75)",
        px: { xs: 2, sm: 3.75, md: 3, lg: 5 },
        py: 4,
      }}
    >
      <Box
        sx={{
          textTransform: "uppercase",
          px: 3,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#fff",
              fontFamily: "Orbitron",
            }}
          >
            Buy $TARG Token
          </Box>
          <Box component="span" sx={{ fontWeight: 700, color: "#EA6464" }}>
            Live
          </Box>
        </Box>
        <Box
          sx={{
            textTransform: "uppercase",
            gap: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              component="span"
              sx={{
                pr: 0.4,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Price:
            </Box>
            <Box
              component="span"
              sx={{
                pr: 0.4,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              $
            </Box>
            <Box
              component="span"
              sx={{
                pr: 0.4,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              0.5495
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              component="span"
              sx={{
                pr: 0.4,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              Listing Price:
            </Box>
            <Box
              component="span"
              sx={{
                pr: 0.4,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              $
            </Box>
            <Box
              component="span"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              0.83
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid #514F4F",
          borderRadius: "16px",
          gap: "32px",
          pt: 4,
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex",px:3 }}>
          <Box
            sx={{ display: "flex", flex: "1", flexDirection: "column", }}
          >
            <Box
              component="span"
              sx={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#CCCDD0",
                fontFamily: "Orbitron",
              }}
            >
              SOLD
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", sm: "2.5rem" },
                color: "#fff",
              }}
            >
              190
            </Box>
            <Box
              component="span"
              sx={{
                pt: 0.5,
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#CCCDD0",
              }}
            >
              600,000
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flex: "1", flexDirection: "column", }}
          >
            <Box
              component="span"
              sx={{
                textTransform: "uppercase",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#CCCDD0",
                fontFamily: "Orbitron",
              }}
            >
              Raised
            </Box>
            <Box
              component="span"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.5rem", sm: "2.5rem" },
                color: "#fff",
              }}
            >
              $200,099
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: "8px", px: 3 }}
        >
          <TimerCountDown time={1747714984} />
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            height: "28.46px",
            backgroundColor: "rgba(246, 229, 255, .04)",
          }}
        >
          <Box
            sx={{
              width: "90.018%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "#fff",
              backgroundImage:
                "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
              px: 0.5,
              opacity: "0.88",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
          ></Box>
          <Box
            component="span"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              textTransform: "uppercase",
              color: "#fff",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            Until Next Price Increase
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "uppercase",
          flexDirection: { xs: "column", sm: "row" },
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box component="img" src={reverseImg} alt="reverse img" />
          <Box
            component="span"
            sx={{ fontSize: "0.75rem", fontWeight: 500, color: "#fff" }}
          >
            BUY USING
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "16px" }}>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: buyingToken == "ETH" ? "#A20127" : "#161616",
              borderRadius: "11.02px",
              border: `1px solid ${buyingToken == "ETH" ? "#fff" : "#A20127"}`,
              px: 1.5,
              py: 1,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#A20127",
              },
            }}
            onClick={() => setBuyingToken("ETH")}
          >
            <Box
              component="img"
              sx={{ maxWidth: "100%", mr: 1 }}
              src={ethIcon}
              alt="eth"
            />
            <Box component="span">ETH</Box>
          </Button>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: buyingToken == "USDT" ? "#A20127" : "#161616",
              borderRadius: "11.02px",
              border: `1px solid ${buyingToken == "USDT" ? "#fff" : "#A20127"}`,
              px: 1.5,
              py: 1,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#A20127",
                border: "1px solid #fff",
              },
            }}
            onClick={() => setBuyingToken("USDT")}
          >
            <Box
              component="img"
              sx={{ maxWidth: "100%", mr: 1 }}
              src={usdtIcon}
              alt="eth"
            />
            <Box component="span">USDT</Box>
          </Button>
          <Button
            sx={{
              color: "#fff",
              backgroundColor: buyingToken == "CARD" ? "#A20127" : "#161616",
              borderRadius: "11.02px",
              border: `1px solid ${buyingToken == "CARD" ? "#fff" : "#A20127"}`,
              px: 1.5,
              py: 1,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#A20127",
                border: "1px solid #fff",
              },
            }}
            onClick={() => setBuyingToken("CARD")}
          >
            <Box
              component="img"
              sx={{ maxWidth: "100%", mr: 1 }}
              src={cardIcon}
              alt="eth"
            />
            <Box component="span">CARD</Box>
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          border: "2px solid #514F4F",
          borderRadius: "16px",
          overflow: "hidden",
          px: 3,
          pb: 3,
          pt: 4,
          flexDirection:{xs:'column',sm:'row'}
        }}
      >
        <Box
          component="span"
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "stretch",
            px: { xs: 0, md: 3, lg: 8 },
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#CCCDD0",
              textTransform: "uppercase",
            }}
          >
            Sending
          </Box>
          <TextField
            placeholder="0.00"
            value={amount}
            onChange={handleInputChange}
            sx={{
              background: "transparent",
              borderRadius: "unset",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },

              input: {
                "&::placeholder": {
                  color: "#fff !important",
                  opacity: 1,
                },
                padding: { xs: "4px 0px", sm: "4px 0px" },
                color: "#fff",
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Orbitron",
              },
            }}
          />
        </Box>
        <Box
          component="span"
          value={amount > 0 ? recivedTokens : "0"}
          sx={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "stretch",
            px: { xs: 0, md: 3, lg: 8 },
          }}
        >
          <Box
            component="span"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#CCCDD0",
              textTransform: "uppercase",
            }}
          >
            Receiving
          </Box>
          <TextField
            placeholder="0.00"
            sx={{
              background: "transparent",
              borderRadius: "unset",
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },

              input: {
                "&::placeholder": {
                  color: "#fff !important",
                  opacity: 1,
                },
                padding: { xs: "4px 0px", sm: "4px 0px" },
                color: "#fff",
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Orbitron",
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#A20127",
            textTransform: "uppercase",
            borderRadius: "17.48px",
            py: 2,
            textAlign: "center",
            width: "100%",
            "&:hover": {
              backgroundColor: "#A20127",
              opacity: "0.75",
            },
          }}
        >
          CONNECT
        </Button>
      </Box>
    </Box>
  );
}

export default PresaleBox;
