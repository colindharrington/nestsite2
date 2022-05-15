import {
  Box,
  Grid,
  Typography,
  Drawer,
  Button,
  List,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Chip,
  Link,
  Container,
} from "@mui/material";
import * as React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

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
    var opacity1 = "1";
    var opacity2 = ".5";
    var title =
      "A crystal or crystalline solid is a solid material whose constituents are arranged in a highly ordered microscopic structure, forming a crystal lattice that extends in all directions.";
  }
  if (value == 1) {
    var size1 = "50%";
    var size2 = "95%";
    var opacity1 = ".5";
    var opacity2 = "1";
    var title =
      "A dagger is a fighting knife with a very sharp point and usually two sharp edges, typically designed or capable of being used as a thrusting or stabbing weapon.";
  }

  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
              }}
            >
              <Box
                sx={{
                  width: 300,
                  textAlign: "left",
                  ml: 3,
                  mt: 3,
                }}
              >
                <Typography variant="h4">Selected:</Typography>
                {title}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 60,
              }}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  mt: 5,
                  width: "100%",
                  // textAlign: "center",
                }}
              >
                <Link href="/">
                  <Button variant="outlined" color="primary">
                    Home
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={2}>
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
                  <Container sx={{ opacity: { opacity1 } }}>
                    <img src="/crystal.gif" width={size1} alt="error"></img>
                  </Container>
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
