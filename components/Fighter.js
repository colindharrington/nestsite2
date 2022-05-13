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
  BottomNavigation,
  BottomNavigationAction,
  Stack,
} from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let squrrel = "shit";

function Fighter() {
  const [value, setValue] = React.useState(0);
  const [selectedFighter, setSelectedFighter] = useState();

  console.log(value);
  const onChangeStatus = (selectedFighter) => {
    setSelectedFighter(selectedFighter);
  };

  useEffect(() => {
    setSelectedFighter(selectedFighter);
  }, [selectedFighter]);

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
                <Button value={value} onClick={setValue}>
                  <img src="/circleFighter.gif" width="100%" alt="error"></img>
                </Button>
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
                <Button value={value} onClick={setValue}>
                  <img src="/squareFighter.gif" width="100%" alt="error"></img>
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 300, padding: 2 }}>
                <BottomNavigation
                  sx={{
                    bgcolor: "#000000",
                    color: "#ffffff",
                    borderRadius: 10,
                  }}
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction label={squrrel} />
                  <BottomNavigationAction label="square" />
                </BottomNavigation>
                {/* <Typography>{selectedFighter}</Typography> */}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Fighter;
