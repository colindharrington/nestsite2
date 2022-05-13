import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Fighter from "./Fighter";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <Box sx={{ width: 300, padding: 2 }}>
        <BottomNavigation
          sx={{ bgcolor: "#000000", color: "#ffffff", borderRadius: 10 }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="circle" />
          <BottomNavigationAction label="square" />
        </BottomNavigation>
      </Box>
    </Box>
  );
}
