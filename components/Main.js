import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal, Stack} from "@mui/material";
import { motion } from "framer-motion"
import { useRef } from "react";


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

  
  return (
    <div>
        <Box sx={{width: "70vw", backgroundColor:"grey", color:"white", p:5, borderRadius: 10, textAlign:"center", border: '5px solid #000'}}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{pb:4}}>
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
                <Grid item xs={12}>
                    <Box sx={{cursor:"pointer", width: "50%", ml:"25%"}}>
                    <motion.div
                    className="container"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8}}
                    >
                        <img src="/bonsai.jpg" width="100%" alt="error" onClick={handleOpen}></img>
                    </motion.div>
                    </Box>
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
                </Grid>
            </Grid>
        </Box>

<Box sx={{width: "70vw", backgroundColor:"grey", color:"white", p:5, borderRadius: 10, textAlign:"center", border: '5px solid #000', mt:10}}>
    <Grid item xs={12}>
        <Stack direction={"row"} spacing={10}>
        <motion.div className="container2" ref={constraintsRef}>
        <motion.div className="item2" drag dragConstraints={constraintsRef} >
            <Typography variant="h2">
                drag me
            </Typography>
        </motion.div>
        </motion.div>
        <Typography>
            Web
        </Typography>
        </Stack>
    </Grid>
</Box>

    </div>
  );
}

export default Thehome;
