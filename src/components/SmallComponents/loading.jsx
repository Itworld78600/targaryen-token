/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { logo2 } from "./Images";

export default function Loading({ loading }) {
  return (
    <div>
      <Backdrop
        sx={{
          zIndex: 220000000,
        }}
        open={loading}
      >
        <Box
          width="100%"
          height="100%"
          sx={{
            background:
              "linear-gradient(rgba(5, 4, 1, 0.6), rgba(5, 4, 1, 0.7))",
            backdropFilter: "blur(20px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="fadeinout"
            component={"img"}
            src={logo2}
            width={{ xs: "180px", md: "350px" }}
            alt=""
          />
        </Box>
      </Backdrop>
    </div>
  );
}
