import { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Container,
  SpeedDial,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import { authContext } from "../context/UseContext";
import {
  getPostServices,
  postPostServices,
  patchPostServices,
  deletePostServices,
} from "../services/postsServices";
import ModalForm from "../components/ModalForm";
import Post from "../components/Post";

export default function Dashboard() {
  const { getAccessToken, getUserId } = useContext(authContext);
  const [postId, setPostId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [mode, setMode] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
    type: "",
    users: {
      id: getUserId(),
    },
  });

  const getPostUser = async () => {
    try {
      const response = await getPostServices(getUserId(), getAccessToken());
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createPostUser = async () => {
    try {
      const response = await postPostServices(data, getAccessToken());
      console.log(response);
      if (response.status === 400) {
        console.log(response.message);
      } else if (response.status === 201) {
        setData([...data, response]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePostUser = async (idPost) => {
    try {
      const response = await patchPostServices(data, getAccessToken(), idPost);
      if (response.status === 400) {
        console.log(response.message);
      } else if (response.status === 200) {
        getPostUser();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostUser = async (idPost) => {
    try {
      const response = await deletePostServices(idPost, getAccessToken());
      if (response.status === 202) {
        setPosts([...posts.filter((post) => post.id !== idPost)]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = () => {
    const currentPost = posts.find((post) => post.id === postId);
    setData(currentPost);
  };

  useEffect(() => {
    getPostUser();
  }, []);

  useEffect(() => {
    if (mode === "edit") {
      getPostById(postId);
    }
  }, [mode, postId]);

  return (
    <>
      <Container
        sx={{
          marginTop: 16,
          marginBottom: 4,
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {posts.length === 0 ? (
          <Typography variant="h2" textAlign={"center"} fontWeight={"400"}>
            No post found
          </Typography>
        ) : (
          <Grid
            container
            justifyContent="left"
            spacing={2}
            columns={{ xs: 2, sm: 4, md: 12 }}
          >
            {posts.map((data) => (
              <Grid item xs={2} sm={2} md={4} key={data.id}>
                <Post
                  data={data}
                  deletePostUser={deletePostUser}
                  mode={mode}
                  setMode={setMode}
                  setOpen={setOpenModal}
                  setPostId={setPostId}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Box sx={{ height: "auto" }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "fixed", top: 100, right: 16 }}
          icon={<SpeedDialIcon />}
          onClick={() => {
            setOpenModal(true);
            setMode("new");
            setData({
              title: "",
              description: "",
              type: "",
              users: {
                id: getUserId(),
              },
            });
          }}
        />
      </Box>
      <ModalForm
        data={data}
        setData={setData}
        createPostUser={createPostUser}
        getPostUser={getPostUser}
        updatePostUser={updatePostUser}
        open={openModal}
        setOpen={setOpenModal}
        mode={mode}
      />
    </>
  );
}
