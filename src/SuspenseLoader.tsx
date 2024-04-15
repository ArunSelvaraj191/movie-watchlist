import { Suspense } from "react";
import pageLoader from "./assets/loading.png";
import { Box, Grid } from "@mui/material";
import { LoadableType } from "./utils/types";

const Loader = () => {
  return (
    <Grid
      sx={{
        height: "100%",
        width: "100%",
        zIndex: 10000,
        position: "absolute",
        top: "0",
        left: "0",
      }}
    >
      <Box
        alt="LOADING"
        component="img"
        src={pageLoader}
        sx={{
          height: "120px",
          width: "120px",
          // zIndex: 10000,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    </Grid>
  );
};

const SuspenseLoader: LoadableType = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default SuspenseLoader;
