/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { RingLoader } from "react-spinners";
import gifLoader from "../../assets/dragonMainImg.gif";

export default function Loading({ loading }) {
  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: 220000000,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
        open={loading}
      >
        {/* <RingLoader color="#ffffff" size={150} /> */}
        <Box
          component={"img"}
          alt=""
          src={gifLoader}
          sx={{
            width: { xs: "200px", md: "350px" },
          }}
        />
      </Backdrop>
    </div>
  );
}
