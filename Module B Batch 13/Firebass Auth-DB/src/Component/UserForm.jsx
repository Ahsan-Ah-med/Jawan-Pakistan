import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteSweepSharpIcon from "@mui/icons-material/DeleteSweepSharp";
import { useNavigate } from "react-router-dom";

const UserForm = ({ setData, data, func, heading, btnText, del, delFunc }) => {
  const navigate = useNavigate();
  // console.log(data.name)
  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          p: 3,
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography color={"#000"} variant="h4" component="h2" gutterBottom>
          {heading}
        </Typography>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              value={data.name}
            />
            <TextField
              fullWidth
              label="User Name"
              variant="outlined"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              value={data.username}
            />
          </Box>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            sx={{ mb: 3 }}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
          <TextField
            fullWidth
            label="Phone"
            type="text"
            variant="outlined"
            sx={{ mb: 3 }}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            value={data.phone}
          />

          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={func}
          >
            <AddIcon />
            {btnText}
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ mt: 3 }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIosIcon />
            Back
          </Button>
          {del && (
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 3 }}
              onClick={delFunc}
            >
              <DeleteSweepSharpIcon />
              Delete
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default UserForm;
