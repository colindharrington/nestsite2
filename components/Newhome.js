import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal, Stack} from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import Link from 'next/link';


const style = {
    position: 'absolute',
    top: '50%',
    left: '5%',
    // transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'grey',
    color:"white",
    // border: '2px solid #000',
    // borderRadius: 10,
    boxShadow: 24,
    p: 4,
    textAlign:"center"
  };

 function Thehome() {
  return (
    <div>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                    <Box sx={{textAlign:"center", width:400, pb: 10}}>
                        <motion.div
                                animate={{
                                    scale: [.9, .9, 1, .9, .9],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                >
                            <motion.div
                            className="container"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                            >
                                <Typography variant="h2" align="center">
                                    Welcome
                                </Typography>
                            </motion.div>
                        </motion.div>

                        <Link href="/about">
                            <motion.div
                            className="container"
                            whileHover={{ scale: 1.1, rotate: -10 }}
                            whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}
                            >
                                <Typography variant="h4" align="center">
                                    hello
                                </Typography>
                            
                            </motion.div>
                        </Link>
                    </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Link href="/about">
                <img src="/cube_small.gif" width="100%" alt="error"></img>
                </Link>
            </Grid>
        </Grid>

    </div>
  );
}

export default Thehome;
