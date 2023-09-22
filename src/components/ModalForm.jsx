import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import { Modal } from "@mui/base/Modal";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { Button, Grid, SpeedDial, TextField } from "@mui/material";

export default function ModalForm({
  data,
  setData,
  createPostUser,
  getPostUser,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [error, setError] = useState({
    error: false,
    message: null,
  });

  const handleForm = () => {
    createPostUser();
    getPostUser();
    handleClose();
  };

  const validateForm = () => {
    if (data.title === "" || data.description === "" || data.type === "") {
      setError({
        error: true,
        message: "Error the field is empty",
      });
    } else {
      setError({
        error: false,
        message: null,
      });
      handleForm();
    }
  };

  return (
    <div>
      <Box sx={{ height: "auto" }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClick={handleOpen}
        />
      </Box>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box
          sx={style}
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
            validateForm();
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            margin="dense"
            required
            fullWidth
            label="Title"
            name="title"
            value={data.title.value}
            onChange={(event) => {
              setData({ ...data, title: event.target.value });
            }}
            error={error.error}
            helperText={error.message}
          />

          <TextField
            margin="dense"
            required
            fullWidth
            label="description"
            name="description"
            value={data.description.value}
            onChange={(event) => {
              setData({ ...data, description: event.target.value });
            }}
            error={error.error}
            helperText={error.message}
          />

          <TextField
            margin="dense"
            required
            fullWidth
            label="type"
            name="type"
            value={data.type.value}
            onChange={(event) => {
              setData({ ...data, type: event.target.value });
            }}
            error={error.error}
            helperText={error.message}
          />

          <Grid container justifyContent={"center"} gap={1} m={1}>
            <Button type="submit" variant="contained" size="large">
              Create post
            </Button>
            <Button
              type="button"
              variant="contained"
              size="small"
              color="error"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Grid>
        </Box>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: "12px",
  padding: "16px 32px 24px 32px",
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === "dark" ? "#000" : "#383838"
  }`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
