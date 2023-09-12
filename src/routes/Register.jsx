import React, { useState, useEffect } from "react";
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
import Nav from "../components/Nav";

const defaultTheme = createTheme();

export default function Register() {
  const [data, setData] = useState({
    userName: "",
    password: "",
    profile: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const [error, setError] = useState({
    error: false,
    message: null,
  });

  const handleSubmit = () => {
    return console.log(data);
  };

  const handleError = (event) => {
    event.preventDefault();
    if (
      data.profile.firstName === "" ||
      data.profile.lastName === "" ||
      data.profile.email === "" ||
      data.userName === "" ||
      data.password === ""
    ) {
      setError({
        error: true,
        message: "Error the field is empty",
      });
    } else {
      setError({
        error: false,
        message: null,
      });

      handleSubmit();
    }
  };

  return (
    <>
      <Nav />
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" sx={{ mb: 5 }}>
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
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 3 }}
              autoComplete={"off"}
              onSubmit={(event) => {
                handleError(event);
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    autoFocus
                    value={data.profile.firstName.value}
                    onChange={(event) => {
                      setData({
                        ...data,
                        profile: {
                          ...data.profile,
                          firstName: event.target.value,
                        },
                      });
                    }}
                    error={error.error}
                    helperText={error.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={data.profile.lastName.value}
                    onChange={(event) => {
                      setData({
                        ...data,
                        profile: {
                          ...data.profile,
                          lastName: event.target.value,
                        },
                      });
                    }}
                    error={error.error}
                    helperText={error.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={data.profile.email.value}
                    onChange={(event) => {
                      setData({
                        ...data,
                        profile: {
                          ...data.profile,
                          email: event.target.value,
                        },
                      });
                    }}
                    error={error.error}
                    helperText={error.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={data.userName.value}
                    onChange={(event) => {
                      setData({ ...data, userName: event.target.value });
                    }}
                    error={error.error}
                    helperText={error.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
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
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2, width: "60%" }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
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
