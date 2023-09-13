import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
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
import { postFetch } from "../helpers/Fetch";
import CustomMessage from "../components/CustomMessage";

const defaultTheme = createTheme();

const API_LOCAL = import.meta.env.VITE_API_LOCAL;

export default function Register() {
  const [data, setData] = useState({
    id: uuidv4(),
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

  const [loading, setLoading] = useState(true);

  const postUser = () => {
    try {
      postFetch(API_LOCAL, data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    postUser();
    event.target.reset();
    console.log(data);
  };

  const validateForm = (event) => {
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

      handleSubmit(event);
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
                validateForm(event);
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
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
                    required
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
                    required
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
                    required
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
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                {!loading ? (
                  <CustomMessage
                    severity={"success"}
                    message={"Successful registration"}
                  />
                ) : (
                  <CustomMessage
                    severity={"info"}
                    message={"Please fill in the required fields *"}
                  />
                )}
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
