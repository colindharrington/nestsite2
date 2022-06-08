import React from "react";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/system";
import {
  Typography,
  Grid,
  Button,
  Modal,
  Stack,
  Skeleton,
} from "@mui/material";
import { MotionConfig } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { isMobile } from "react-device-detect";

function About(props) {
  const { loading = false } = props;
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <Box>
        <Grid item xs={12} md={12}>
          <Stack
            sx={{ mt: 5 }}
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Link href="/">
              <Button variant="outlined" color="primary">
                Back
              </Button>
            </Link>
            <Link href="https://sjunk.vercel.app/">
              <Button variant="outlined" color="primary">
                Other Site
              </Button>
            </Link>
            <Link href="https://privtool.vercel.app/">
              <Button variant="outlined" color="primary">
                Other Site 2
              </Button>
            </Link>
            {/* <Link href="/testing">
              <Button variant="outlined" color="primary">
                Select
              </Button>
            </Link> */}
            <Link href="/video">
              <Button variant="outlined" color="primary">
                Video
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Box sx={{ textAlign: "center", width: "100%", mt: 10 }}>
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
                {loading ? (
                  <Skeleton
                    variant="circular"
                    width={200}
                    height={200}
                  ></Skeleton>
                ) : (
                  <div>
                    {" "}
                    {isMobile ? (
                      <img src="/skycube.gif" width={200} alt="error"></img>
                    ) : (
                      <img src="/skycube.gif" width={600} alt="error"></img>
                    )}
                  </div>
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Box>

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
