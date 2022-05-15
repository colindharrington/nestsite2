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
      <Box>
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 60,
                }}
              >
                <img
                  src="/bonsai.gif"
                  minWidth={300}
                  maxWidth={600}
                  alt="error"
                ></img>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12} md={12}>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Link href="/">
              <Button variant="outlined" color="secondary">
                Back
              </Button>
            </Link>

            <Link href="/testing">
              <Button variant="outlined" color="secondary">
                Select
              </Button>
            </Link>
          </Stack>
        </Grid>
        {/* <Grid item xs={12} md={12}>
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
          </Grid> */}
      </Box>
    </div>
  );
}

export default About;
