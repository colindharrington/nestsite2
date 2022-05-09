import React from "react";
import styles from '../styles/Home.module.css'
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal, Stack} from "@mui/material";
import { motion, MotionConfig } from "framer-motion"
import { useRef } from "react";
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

 function About() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <div>
        <Box sx={{textAlign:"center", height:1200, width: "100%", pt: 10}}>
        <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
                <Link href="/">
                    <Button variant="outlined" color="primary">
                        Home
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography variant="h5">
                      Welcome to this website
                </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
                <Box sx={{textAlign:"center", mt: 10}}>
                    <MotionConfig reducedMotion="user">
                        <div className="example-container">
                            <motion.div
                                animate={{
                                    scale: [.9, 1, 1, .9, .9],
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
        </Box>
     </div>
  );
}

export default About;
