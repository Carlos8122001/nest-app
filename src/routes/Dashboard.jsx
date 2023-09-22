import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import { authContext } from "../context/UseContext";
import { getPostServices, postPostServices } from "../services/postsServices";
import ModalForm from "../components/ModalForm";
import Post from "../components/Post";

export default function Dashboard() {
  const { getAccessToken, getUserId } = useContext(authContext);
  const id = getUserId();
  const token = getAccessToken();
  const [posts, setPosts] = useState(null);
  const [newPost, setNewPost] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    type: "",
    users: {
      id: id,
    },
  });

  const createPostUser = async () => {
    try {
      const response = await postPostServices(data, token);
      if (response.status === 401) {
        console.log(response.message);
      } else if (response.status === 201) {
        setNewPost(response);
        setPosts({ ...posts, newPost });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <ModalForm
        data={data}
        setData={setData}
        createPostUser={createPostUser}
      />
    </>
  );
}
