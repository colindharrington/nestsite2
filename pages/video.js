import { Box, Typography, Grid, Button, Link } from "@mui/material";
import React from "react";
import YoutubeEmbed from "../components/Embed";

function video() {
  return (
    <div>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Link href="/">
              <Button variant="outlined"> Back</Button>
            </Link>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="h4">Norway</Typography>
          </Grid> */}
          <Grid item xs={12}>
            <YoutubeEmbed autoPlay embedId="mu1cildkOks" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default video;
