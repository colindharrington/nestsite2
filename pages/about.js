import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/system";
import { Typography, Grid, Button, Modal, Stack } from "@mui/material";
import { MotionConfig } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function About() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <Box sx={{ textAlign: "center", height: 1200, width: "100%", pt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Link href="/">
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>
          </Grid>
          {/* <Grid item xs={12} md={12}>
            <Typography variant="h5">Welcome to this website</Typography>
          </Grid> */}
          <Grid item xs={12} md={4}>
            <img src="/cube_small.gif" width="100%" alt="error"></img>
            <Typography>Sounds</Typography>
          </Grid>
          <Link href="https://www.reddit.com/r/aphextwin/">
            <Grid item xs={12} md={4}>
              <img src="/cube_small.gif" width="100%" alt="error"></img>
              <Typography>Reddit</Typography>
            </Grid>
          </Link>
          <Grid item xs={12} md={4}>
            <img src="/cube_small.gif" width="100%" alt="error"></img>
            <Typography>Misc</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
