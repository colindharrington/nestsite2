import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal, Stack} from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { render } from "react-dom";
import { motion, MotionConfig } from "framer-motion";

import ReactAudioPlayer from 'react-audio-player';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'grey',
    color:"white",
    border: '5px solid #000',
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
        <Grid container>
            <Grid item xs={6}>
            <Box sx={{textAlign:"center"}}>
            <MotionConfig reducedMotion="user">
                        <div className="example-container">
                            <motion.div
                            animate={{
                                scale: [1, 1.1, 1.1, 1, 1],
                                rotate: [0, 90, 0, 0, 0],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                            />
                        </div>
                    </MotionConfig>
                    </Box>
            </Grid>
            <Grid item xs={6}>
                 <Box sx={{textAlign:"center"}}>
                    <motion.div
                    className="container"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
                    >
                        <Typography variant="h4" align="center">
                            Welcome
                        </Typography>
                    </motion.div>
                    <motion.div
                    className="container"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.8, rotate: 10, borderRadius: "100%" }}
                    >
                        <Typography variant="body1" align="center">
                            hello
                        </Typography>
                    </motion.div>
                </Box>
            </Grid>
        </Grid>

    </div>
  );
}

export default Thehome;
