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
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 60,
              }}
            >
              <img src="/bonsai.gif" width={600} alt="error"></img>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link href="/">
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link href="/testing">
              <Button variant="outlined" color="secondary">
                Select
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={12}>
            <motion.div
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Link href="/">
                <img src="/skycube.gif" width="100vw" alt="error"></img>
              </Link>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default About;
