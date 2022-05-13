import {
  Box,
  Grid,
  Typography,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";

function Fighter() {
  return (
    <div>
      <Box sx={{ width: "90%", ml: "5%" }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Box width={"100%"}>
                <img src="/circleFighter.gif" width="100%" alt="error"></img>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={6}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Box width={"100%"}>
                <img src="/squareFighter.gif" width="100%" alt="error"></img>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Fighter;
