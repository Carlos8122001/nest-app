/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Post({ data, deletePostUser, setMode, setOpen, setPostId}) {
  return (
    <>
      <Card
        sx={{
          width: "250px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        elevation={8}
      >
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="h6">{data.description}</Typography>
          <Typography variant="h6">{data.type}</Typography>
          <Typography variant="h6">Id {data.id}</Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "right" }}>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => {
              setMode("edit");
              setOpen(true);
              setPostId(data.id)
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => {
              deletePostUser(data.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
