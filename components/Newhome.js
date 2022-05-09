import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal, Stack} from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";
import Link from 'next/link';

import ReactAudioPlayer from 'react-audio-player';


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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const constraintsRef = useRef(null);

    const [count, setCount] = useState(0);
  return (
    <div>
        <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
                    <Box sx={{textAlign:"center", width:500}}>
                        <motion.div
                                animate={{
                                    scale: [1, 1, 1.1, 1, 1],
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
                            whileHover={{ scale: 1.2, rotate: -10 }}
                            whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}
                            >
                                <Typography variant="h4" align="center">
                                    click here
                                </Typography>
                            
                            </motion.div>
                        </Link>
                    </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{textAlign:"center", width:500}}>
                    <MotionConfig reducedMotion="user">
                        <div className="example-container">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1.1, 1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                >
                                    <img src="/cthru.png" width="100%" alt="error" onClick={handleOpen}></img>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Hexdump to find data
                                            </Typography>
                                            <ReactAudioPlayer
                                                src="/final.mp3"
                                                controls
                                                />
                                        </Box>
                                    </Modal>
                                </motion.div>
                            </div>
                        </MotionConfig>
                    </Box>
            </Grid>
        </Grid>

    </div>
  );
}

export default Thehome;
