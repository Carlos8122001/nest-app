import React, { useContext, useEffect, useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { authContext } from "../context/useContext";
import { getPostServices } from "../services/postsServices";

import Post from "../components/Post";

export default function Dashboard() {
  const { getAccessToken, getUserId } = useContext(authContext);
  const [posts, setPosts] = useState(null);

  const id = getUserId();
  const token = getAccessToken();

  const getPostUser = async () => {
    try {
      const response = await getPostServices(id, token);
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostUser();
  }, []);

  return (
    <>
      <Box sx={{ height: "auto" }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        />
      </Box>
      <Container
        sx={{
          marginTop: 16,
          marginBottom: 2,
          width: "65%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {posts === null ? (
          <Typography variant="h2" textAlign={"center"} fontWeight={"400"}>
            No post found
          </Typography>
        ) : (
          <Grid
            container
            justifyContent="left"
            spacing={5}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {posts.map((data) => (
              <Grid item xs={2} sm={2} md={4} key={data.id}>
                <Post data={data} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
