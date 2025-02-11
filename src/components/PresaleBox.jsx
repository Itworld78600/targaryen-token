import { Box, Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../utils/utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import TimerCountDown from "./SmallComponents/PresaleTimer";
import { reverseImg, ethIcon, usdtIcon } from "./SmallComponents/Images";
import {
  presaleReadFunction,
  presaleWriteFunction,
  tokenReadFunction,
  usdtWriteFunction,
} from "../ConnectivityAssets/hooks";
import { formatUnits, parseUnits } from "viem";
import { presaleAddress } from "../ConnectivityAssets/environment";
import { ToastNotify } from "./SmallComponents/AppComponents";
import Loading from "./SmallComponents/loading";

function PresaleBox() {
  const [buyingToken, setBuyingToken] = useState("BNB");
  const [amount, setAmount] = useState("");
  const { open } = useWeb3Modal();
  const { account } = useContext(AppContext);
  const [bnbPrice, setBnbPrice] = useState(0);
  const [preSaleEndedStatus, setPresaleEndedStatus] = useState(false);
  const [claimIsEnabled, setclaimIsEnabled] = useState(false);
  const [recivedTokens, setreceivedTokens] = useState(0);
  const [tokenPerUSDT, settokenPerUSDT] = useState(0);
  const [tokenPerETH, settokenPerETH] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  const [nextTokenPrice, setNextTokenPrice] = useState(0);
  const [currentStage, setcurrentStage] = useState(0);
  const [loading, setloading] = useState(false);
  const [amountRaisedForAll, setamountRaisedForAll] = useState(0);
  const [totalSoldTokens, setTotalSoldTokens] = useState(0);
  const [progressBarForAll, setprogressBarForAll] = useState(0);
  const [userPurchasedTokens, setuserPurchasedTokens] = useState(0);
  const [usdtToRaised, setusdtToRaised] = useState(0);
  const [tokensToSell, settokensToSell] = useState(0);
  const [isPresaleStart, setisPresaleStart] = useState(false);

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

  const handleInputChange = (event) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };

  const toLocalFormat = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const initVoidSigner = async () => {
    try {
      let dec = await tokenReadFunction("decimals");
      dec = Number(dec.toString());
      let getLatestPriceBnb = await presaleReadFunction("getLatestPrice");
      getLatestPriceBnb = formatUnits(getLatestPriceBnb?.toString(), 8);
      let stage = await presaleReadFunction("currentStage");
      let presaleStatus = await presaleReadFunction("presaleStatus");
      let claimEnabled = await presaleReadFunction("isClaimEnabled");
      setclaimIsEnabled(claimEnabled);
      setcurrentStage(Number(stage?.toString()));
      let usdtToToken = await presaleReadFunction("usdtToToken", [
        "1000000000000000000",
        stage?.toString(),
      ]);

      settokenPerUSDT(Number(formatUnits(usdtToToken?.toString(), dec)));
      let ethToToken = await presaleReadFunction("nativeToToken", [
        "1000000000000000000",
        stage?.toString(),
      ]);
      settokenPerETH(Number(formatUnits(ethToToken?.toString(), dec)));
      setisPresaleStart(presaleStatus);
      let tokenPerUSDTContract = await presaleReadFunction("phases", [
        +stage?.toString(),
      ]);
      settokenPrice(+formatUnits(tokenPerUSDTContract[2]?.toString(), dec));
      let tokenPerUSDTNextContract = await presaleReadFunction("phases", [
        +stage?.toString() > 9 ? 9 : +stage?.toString() + 1,
      ]);
      settokenPrice(+formatUnits(tokenPerUSDTContract[2]?.toString(), dec));
      setNextTokenPrice(
        +formatUnits(tokenPerUSDTNextContract[2]?.toString(), dec)
      );
      let presaleData = await presaleReadFunction("phases", [
        +stage?.toString(),
      ]);

      let raised = Number(
        parseFloat(
          `${
            Number(formatUnits(presaleData[1]?.toString(), dec)) /
            Number(formatUnits(presaleData[2]?.toString(), dec))
          }`
        ).toFixed(0)
      );

      let sold = +parseFloat(
        `${Number(formatUnits(presaleData[1]?.toString(), dec))}`
      ).toFixed(0);

      let toSell = Number(
        parseFloat(
          `${Number(formatUnits(presaleData[0]?.toString(), dec))}`
        ).toFixed(0)
      );

      let toRaised = Number(
        parseFloat(
          `${
            Number(formatUnits(presaleData[0]?.toString(), dec)) /
            Number(formatUnits(presaleData[2]?.toString(), dec))
          }`
        ).toFixed(0)
      );
      setBnbPrice(getLatestPriceBnb);
      setamountRaisedForAll(toLocalFormat(Number(raised)));
      setTotalSoldTokens(toLocalFormat(Number(sold)));
      settokensToSell(toLocalFormat(Number(toSell)));
      setusdtToRaised(toLocalFormat(Number(toRaised)));
      let progForAll = (+sold / toSell) * 100;
      setprogressBarForAll(+progForAll);
      const preSaleStatusContract = await presaleReadFunction(
        "isPresaleEnded",
        []
      );
      setPresaleEndedStatus(preSaleStatusContract);
    } catch (e) {
      console.log(e);
    }
  };

  const userTokenFunction = async () => {
    try {
      let dec = await tokenReadFunction("decimals");
      let userData = await presaleReadFunction("users", [account]);
      let totalPurchasedUser = +formatUnits(
        userData[2]?.toString(),
        +dec?.toString()
      );
      setuserPurchasedTokens(parseFloat(totalPurchasedUser)?.toFixed(0));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (account) {
      userTokenFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  useEffect(() => {
    initVoidSigner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const calculatorUSDT = async () => {
      try {
        if (buyingToken === "USDT") {
          let tokenUSDT = +tokenPerUSDT * +amount;
          setreceivedTokens(tokenUSDT?.toFixed(2));
        } else {
          let tokenETH = +tokenPerETH * +amount;
          setreceivedTokens(tokenETH?.toFixed(2));
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (+amount > 0) {
      calculatorUSDT();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, buyingToken]);

  const buyHandler = async () => {
    if (!account) {
      return showAlert("Error! Please connect your wallet.");
    }
    if (!amount || amount <= 0) {
      return showAlert("Error! Please enter amount to buy.");
    }
    try {
      setloading(true);

      if (buyingToken === "USDT") {
        await usdtWriteFunction("approve", [
          presaleAddress,
          parseUnits(amount.toString(), 18).toString(),
        ]);

        await presaleWriteFunction("buyTokenUSDT", [
          parseUnits(amount.toString(), 18).toString(),
        ]);
      } else {
        await presaleWriteFunction(
          "buyToken",
          [],
          parseUnits(amount.toString(), 18).toString()
        );
      }
      setAmount("");
      setreceivedTokens(0);
      initVoidSigner();
      userTokenFunction();
      setloading(false);
      showAlert("Success! Transaction Confirmed", "success");
    } catch (error) {
      setloading(false);
      console.log(error);
      showAlert(error?.shortMessage);
    }
  };

  const claimHandler = async () => {
    if (!account) {
      return showAlert("Error! Please connect your wallet.");
    }
    try {
      setloading(true);
      await presaleWriteFunction("claimTokens");
      initVoidSigner();
      userTokenFunction();
      setloading(false);
      showAlert("Claimed successfully!", "success");
    } catch (e) {
      setloading(false);
      showAlert(e?.shortMessage);
    }
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
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Loading loading={loading} />
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
            Buy $TGN Token
          </Box>
          <Box component="span" sx={{ fontWeight: 700, color: "#EA6464" }}>
            {isPresaleStart ? "Live" : "Paused"}
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
              {tokenPerUSDT > 0 ? 1 / tokenPerUSDT : "0.000"}
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
              0.01
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
        <Box sx={{ display: "flex", px: 3 }}>
          <Box sx={{ display: "flex", flex: "1", flexDirection: "column" }}>
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
              {totalSoldTokens}
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
              / {tokensToSell}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flex: "1", flexDirection: "column" }}>
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
              ${amountRaisedForAll}
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
              / {usdtToRaised}
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{ display: "flex", justifyContent: "center", gap: "8px", px: 3 }}
        >
          <TimerCountDown time={1747714984} />
        </Box> */}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            height: "35px",
            backgroundColor: "rgba(246, 229, 255, .04)",
          }}
        >
          <Box
            sx={{
              width: `${progressBarForAll}%`,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "#fff",
              backgroundImage:
                "linear-gradient(90deg, rgba(218,86,86,1) 0%, rgba(162,1,39,1) 100%, rgba(162,1,39,1) 100%)",
              px: 0.5,
              opacity: "0.88",
              borderBottomLeftRadius: "16px",
              borderBottomRightRadius: "16px",
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
              textAlign: "center",
            }}
          >
            Until Next Price Increase <br />$
            {nextTokenPrice > 0 ? 1 / nextTokenPrice : "0.000"}
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
              backgroundColor: buyingToken == "BNB" ? "#A20127" : "#161616",
              borderRadius: "11.02px",
              border: `1px solid ${buyingToken == "BNB" ? "#fff" : "#A20127"}`,
              px: 1.5,
              py: 1,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#A20127",
              },
            }}
            onClick={() => setBuyingToken("BNB")}
          >
            <Box
              component="img"
              sx={{ maxWidth: "15px", mr: 1 }}
              src={ethIcon}
              alt="BNB"
            />
            <Box component="span">BNB</Box>
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
              alt="BNB"
            />
            <Box component="span">USDT</Box>
          </Button>
          {/* <Button
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
              alt="BNB"
            />
            <Box component="span">CARD</Box>
          </Button> */}
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
          flexDirection: { xs: "column", sm: "row" },
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
            InputProps={{
              readOnly: true,
            }}
            value={amount > 0 ? recivedTokens : "0"}
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
        {preSaleEndedStatus && claimIsEnabled ? (
          <Button
            onClick={account ? () => claimHandler() : async () => await open()}
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
            {account ? "Claim Now" : "Connect Wallet"}
          </Button>
        ) : preSaleEndedStatus ? (
          <Button
            sx={{
              color: "#d1d1d1",
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
            Presale Ended
          </Button>
        ) : (
          <Button
            onClick={account ? () => buyHandler() : async () => await open()}
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
            {account ? "Buy Now" : "Connect Wallet"}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default PresaleBox;
