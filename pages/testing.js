import { Box, Grid, Link, Menu, Stack, Button } from "@mui/material";
import React from "react";
import Fighter from "../components/Fighter";
import FightersMenu from "../components/FightersMenu";
import MainMenu from "../components/MainMenu";

function testing() {
  return (
    <div className="fighter">
      {/* <MainMenu /> */}
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Box sx={{ position: "fixed", top: 50, left: 50, zIndex: 1 }}>
          <Link href="/">
            <Button variant="outlined" color="primary">
              Home
            </Button>
          </Link>
        </Box>
        <Fighter />
        {/* <Grid item xs={12}>
          <Stack
            sx={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FightersMenu />
          </Stack>
        </Grid> */}
      </Box>
    </div>
  );
}

export default testing;
