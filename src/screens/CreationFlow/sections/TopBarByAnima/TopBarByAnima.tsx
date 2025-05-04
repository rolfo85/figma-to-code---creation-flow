import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export const TopBarByAnima = (): JSX.Element => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "#d7d5e4",
        backgroundColor: "white",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: 2 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            component="img"
            src="https://c.animaapp.com/maa63q77uk1ttk/img/v6-icon-1.svg"
            alt="Icon"
            sx={{ width: 21, height: 20 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#2c2b38",
            }}
          >
            Customers
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "purple.500",
            borderRadius: 1,
            textTransform: "none",
            padding: "8px 16px",
          }}
        >
          Save
        </Button>
      </Toolbar>
    </AppBar>
  );
};
