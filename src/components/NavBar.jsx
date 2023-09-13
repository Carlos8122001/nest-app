import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar sx={{ position: "absolute", top: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 2 }}>
            <Button color="inherit" component={Link} to={"/"}>
              Home
            </Button>
          </Box>

          <Button color="inherit" component={Link} to={"/login"}>
            Login
          </Button>
          <Button color="inherit" component={Link} to={"/register"}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
