import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid, Button, Modal, Stack } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import ReactAudioPlayer from "react-audio-player";
import { isMobile } from "react-device-detect";

const style = {
  position: "absolute",
  top: "50%",
  left: "5%",
  // transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'grey',
  color: "white",
  // border: '2px solid #000',
  // borderRadius: 10,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Thehome(props) {
  const { loading = false } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(
    "%cSGVsbG8K, 48656C6C6F",
    // "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 10px black;font-weight:bold"
    "color: -webkit-linear-gradient(#fff, #000,#fff);font-family:system-ui;font-size:4rem;font-weight:bold;background: -webkit-linear-gradient(#000, #fff,#000);padding:50px;"
  );

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", width: 300, pb: 10 }}>
            <motion.div
              animate={{
                scale: [0.9, 0.9, 1, 0.9, 0.9],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <motion.div
                className="container"
                whileHover={{ scale: 1, scale: 1.3 }}
                whileTap={{ scale: 0.8, scale: 0.8, borderRadius: "100%" }}
              >
                <Link href="/about">
                  <Box sx={{ cursor: "pointer" }}>
                    <Typography variant="h2" align="center">
                      Welcome
                    </Typography>
                  </Box>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                scale: [0.6, 0.6, 0.5, 0.5, 0.6],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Box sx={{ width: "100%", height: 5, bgcolor: "black" }}></Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 3 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
            >
              <motion.div
                animate={{
                  scale: [0.9, 1, 1, 0.9, 0.9],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Box sx={{ cursor: "pointer", mt: 1 }}>
                  <Typography variant="h4" onClick={handleOpen}>
                    {"(: :)"}
                  </Typography>
                </Box>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Hexdump to find data
                    </Typography>
                    <ReactAudioPlayer src="/final.mp3" autoPlay controls />
                  </Box>
                </Modal>
              </motion.div>
            </motion.div>

            {/* 
            <Link href="/testing">
              <motion.div
                className="container"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}
              >
                <Typography variant="h4" align="center">
                  hi
                </Typography>
              </motion.div>
            </Link> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 60,
            }}
          >
            {/* <Box sx={{ cursor: "pointer" }}>
              <Link href="/testing">
                <img src="/skycube.gif" width="100%" alt="error"></img>
              </Link>
            </Box> */}
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
                          <Link href="/testing">
                            <Box xs={{ cursor: "pointer" }}>
                              <img
                                src="/bonsai.gif"
                                width={300}
                                alt="error"
                              ></img>
                            </Box>
                          </Link>
                        ) : (
                          <Link href="/testing">
                            <img
                              src="/bonsai.gif"
                              width={700}
                              alt="error"
                            ></img>
                          </Link>
                        )}
                      </div>
                    )}
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Thehome;
