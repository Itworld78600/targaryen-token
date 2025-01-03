import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@mui/material";

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery("(max-width:650px)");

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format("x");
    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap",minWidth:'100%',gap:'10px' }}>
        <Box
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexGrow="1"
          flexBasis="200"
        >
          <Box
            sx={{
              backgroundColor: "#3A3939",
              borderRadius: "11.94px",
              border: "1px solid #484848",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              borderRadius="12px"
              color="#ffffff"
              fontSize={"13.65px"}
              textAlign="center"
              fontFamily="Montserrat"
              display={"flex"}
              alignItems={"center"}
            >
              <Box component="span">
                {countTime.time_days > 9 ? "" : 0}
                {countTime.time_days}
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: "400",
                  color: "#fff",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                Days
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}

        <Box
            mt={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            flexGrow="1"
            flexBasis="200"
        >
          <Box
            sx={{
              backgroundColor: "#3A3939",
              borderRadius: "11.94px",
              border: "1px solid #484848",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              borderRadius="12px"
              color="#ffffff"
              fontSize={"13.65px"}
              textAlign="center"
              fontFamily="Montserrat"
              display={"flex"}
              alignItems={"center"}
            >
              <Box component="span">
                {countTime.time_Hours > 9 ? "" : 0}
                {countTime.time_Hours}
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: "400",
                  color: "#fff",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                {matches ? "Hrs" : "Hours"}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}
        <Box
             mt={2}
             display="flex"
             flexDirection="column"
             alignItems="center"
             flexGrow="1"
             flexBasis="200"
        >
          <Box
            sx={{
              backgroundColor: "#3A3939",
              borderRadius: "11.94px",
              border: "1px solid #484848",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              borderRadius="12px"
              color="#ffffff"
              fontSize={"13.65px"}
              textAlign="center"
              fontFamily="Montserrat"
              display={"flex"}
              alignItems={"center"}
            >
              <Box component="span">
                {countTime.time_Minusts > 9 ? "" : 0}
                {countTime.time_Minusts}
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: "400",
                  color: "#fff",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                {matches ? "Mnts" : "Minutes"}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Box mx={2} mb={5} color="#000000" fontWeight="700" fontSize="30px">
          :
        </Box> */}
        <Box
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          flexGrow="1"
          flexBasis="200"
        >
          <Box
            sx={{
              backgroundColor: "#3A3939",
              borderRadius: "11.94px",
              border: "1px solid #484848",
              px: 1.5,
              py: 0.5,
            }}
          >
            <Box
              borderRadius="12px"
              color="#ffffff"
              fontSize={"13.65px"}
              textAlign="center"
              fontFamily="Montserrat"
              display={"flex"}
              alignItems={"center"}
            >
              <Box component="span">
                {countTime.time_seconds > 9 ? "" : 0}
                {countTime.time_seconds}
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: "400",
                  color: "#fff",
                  textTransform: "uppercase",
                  ml: 1,
                }}
              >
                {matches ? "Scnds" : "Seconds"}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
