import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { authContext } from "../context/useContext";
import { getPostServices } from "../services/postsServices";
import Grid from "@mui/material/Grid";
import Post from "../components/Post";

export default function Dashboard() {
  const { getAccessToken, getUserId } = useContext(authContext);
  const [posts, setPosts] = useState([]);

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
      <Container sx={{ marginTop: 15 }}>
        {!posts ? (
          <Typography>No post found</Typography>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {posts.map((data) => (
              <Grid item xs={2} sm={4} md={4} key={data.id}>
                <Post data={data} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
