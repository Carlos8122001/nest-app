import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as LinkRouter } from "react-router-dom";
import CustomMessage from "../components/CustomMessage";

export default function FormLogin() {
  const defaultTheme = createTheme();

  const [data, setData] = useState({
    userName: "",
    password: "",
  });

  const [error, setError] = useState({
    error: false,
    message: null,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    console.log(data);
  };

  const validateForm = (event) => {
    event.preventDefault();
    if (data.userName === "" || data.password === "") {
      setError({
        error: true,
        message: "Error the field is empty",
      });
    } else {
      setError({
        error: false,
        message: null,
      });

      handleSubmit(event);
    }
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={(event) => validateForm(event)}
              noValidate
              autoComplete="off"
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="Username"
                autoFocus
                value={data.userName.value}
                onChange={(event) => {
                  setData({ ...data, userName: event.target.value });
                }}
                error={error.error}
                helperText={error.message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={data.password.value}
                onChange={(event) => {
                  setData({ ...data, password: event.target.value });
                }}
                error={error.error}
                helperText={error.message}
              />
              <Grid container justifyContent={"center"}>
                <CustomMessage
                  severity={"info"}
                  message={"Please fill in the required fields *"}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2, width: "60%" }}
                >
                  Sign In
                </Button>
              </Grid>
              <Grid container justifyContent={"end"}>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    component={LinkRouter}
                    to={"/register"}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
