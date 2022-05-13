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

  const onChangeStatus = (selectedFighter) => {
    setSelectedFighter(selectedFighter);
  };

  useEffect(() => {
    setSelectedFighter(selectedFighter);
  }, [selectedFighter]);

  if (value == 0) {
    var size1 = "70%";
    var size2 = "40%";
    var descript1 = "Squ∆r∑";
    var descript2 = "";
  }
  if (value == 1) {
    var size1 = "40%";
    var size2 = "70%";
    var descript1 = "";
    var descript2 = "©ırÇ∫∑";
  }

  return (
    <div>
      <Box sx={{ width: "90%", ml: "5%" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {/* <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            > */}
            <Box width={"100%"}>
              <Button
                value={1}
                onClick={(event, newValue) => {
                  setValue(0);
                  console.log(value);
                }}
              >
                <img src="/circleFighter.gif" width={size1} alt="error"></img>
              </Button>
              <Typography variant="h6">{descript1}</Typography>
            </Box>
            {/* </motion.div> */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            > */}
            <Box width={"100%"}>
              <Button
                value={0}
                onClick={(event, newValue) => {
                  setValue(1);
                  console.log(value);
                }}
              >
                <img src="/squareFighter.gif" width={size2} alt="error"></img>
              </Button>
              <Typography variant="h6">{descript2}</Typography>
            </Box>
            {/* </motion.div> */}
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
                    // bgcolor: "#000000",
                    // color: "#ffffff",
                    borderRadius: 10,
                  }}
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction label="circle" />
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
