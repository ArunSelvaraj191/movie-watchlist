import { Grid } from "@mui/material";
import { FC } from "react";

const Watchlist: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={2}
        sx={{
          borderRight: "1px solid",
          minHeight: "100vh",
        }}
      >
        Grid 1
      </Grid>
      <Grid item xs={10}>
        Grid 2
      </Grid>
    </Grid>
  );
};
export default Watchlist;
