import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

export default function Post({ data }) {
  return (
    <>
      <Card
        sx={{
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        elevation={8}
      >
        <CardActions sx={{display:"flex",justifyContent:"right"}}>
        <IconButton aria-label="delete">
        <CloseIcon />
      </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="h4" color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="h6">{data.description}</Typography>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"right"}}>
        <IconButton aria-label="delete">
        <EditIcon />
      </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
