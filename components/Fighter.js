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
  Link,
  Chip,
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
    var size1 = "80%";
    var size2 = "50%";
    var descript1 = "Squ∆r∑";
    var descript2 = "";
  }
  if (value == 1) {
    var size1 = "50%";
    var size2 = "95%";
    var descript1 = "";
    var descript2 = "©ırÇ∫∑";
  }

  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          // background: "linear-gradient( #222222,#000000, #222222)",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Stack direction={"column"}>
                <Link href="/">
                  <img src="/cube_small.gif" width="5%" alt="error"></img>
                </Link>
              </Stack>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Chip label="Select Your Style" color="info" />
            </motion.div>
          </Grid>

          <Grid item xs={12}>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                }}
              >
                <Box
                  sx={{
                    width: 300,
                    padding: 2,
                  }}
                >
                  <BottomNavigation
                    sx={{
                      // bgcolor: "#000000",
                      borderRadius: 10,
                    }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  >
                    <BottomNavigationAction label="Magic" />
                    <BottomNavigationAction label="Blade" />
                  </BottomNavigation>
                </Box>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Box width={"100%"}>
                <Button
                  disableRipple
                  value={1}
                  onClick={(event, newValue) => {
                    setValue(0);
                  }}
                  style={{ backgroundColor: "transparent" }}
                >
                  <img src="/crystal.gif" width={size1} alt="error"></img>
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Box width={"100%"}>
                <Button
                  disableRipple
                  value={0}
                  onClick={(event, newValue) => {
                    setValue(1);
                  }}
                  style={{ backgroundColor: "transparent" }}
                >
                  <img src="/dagger.gif" width={size2} alt="error"></img>
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      {/* </Box> */}
    </div>
  );
}

export default Fighter;
