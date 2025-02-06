// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
  Box,
  Paper,
  Alert,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import React, { useState } from "react";

export default function SignUpView() {
  const [gdprChecked, setGdprChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Handle GDPR Checkbox Change
  const handleGdprChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGdprChecked(event.target.checked);
    if (event.target.checked) setShowAlert(false);
  };

  // Handle Sign-Up Attempt
  const handleSignUp = (provider: string) => {
    if (!gdprChecked) {
      setShowAlert(true);
      return;
    }
    signIn(provider, { callbackUrl: "/prispevok" });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 3,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", color: "primary.main", mb: 4 }}
        >
          Registrácia
        </Typography>

        {/* Sign-in Link */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="body1">
            Už máte účet?{" "}
            <Typography
              component="a"
              href="/auth/prihlasenie"
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              Prihláste sa
            </Typography>
          </Typography>
        </Box>

        {/* Show Alert if GDPR is not checked */}
        {showAlert && (
          <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
            Musíte súhlasiť s podmienkami GDPR, aby ste mohli pokračovať.
          </Alert>
        )}

        {/* GDPR Checkbox */}
        <FormControlLabel
          control={<Checkbox checked={gdprChecked} onChange={handleGdprChange} />}
          label={
            <Typography variant="body2">
              Súhlasím s{" "}
              <Typography
                component="a"
                href="/gdpr"
                sx={{ textDecoration: "none", color: "primary.main" }}
              >
                podmienkami GDPR
              </Typography>
              {" "}a{" "}
              <Typography
                component="a"
                href="/podmienky"
                sx={{ textDecoration: "none", color: "primary.main" }}
              >
                podmienkami používania
              </Typography>
            </Typography>
          }
          sx={{ alignSelf: "flex-start", mb: 3 }}
        />

        {/* Google Sign-Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => handleSignUp("google")}
          sx={{ mb: 2 }}
        >
          Registrovať sa účtom Google
        </Button>

        {/* GitHub Sign-Up */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          onClick={() => handleSignUp("github")}
          sx={{ mb: 3 }}
        >
          Registrovať sa účtom GitHub
        </Button>
      </Paper>
    </Container>
  );
}
