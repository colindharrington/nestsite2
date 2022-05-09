import React from "react";
import { Box } from "@mui/system";
import { Typography, Grid , Button, Modal} from "@mui/material";


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
  
  return (
    <div>
        <Box sx={{width: "70vw", backgroundColor:"grey", color:"white", p:5, borderRadius: 10, textAlign:"center", border: '5px solid #000'}}>
            <Grid container>
                <Grid item xs={12}>
                    <Box sx={{pb:4}}>
                     <Typography variant="h4" align="center">
                        Welcome
                    </Typography>
                    <Typography variant="body1" align="center">
                        Hello
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{cursor:"pointer",  border: '2px solid #000', width: "90%", ml:"5%"}}>
                        <img src="/bonsai.jpg" width="100%" alt="error" onClick={handleOpen}></img>
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
    </div>
  );
}

export default Thehome;
