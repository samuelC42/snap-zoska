// src/sections/SignUpView.tsx

"use client";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function SignUpView() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <a href="/auth/prihlasenie">Prihláste sa</a>
      </Typography>

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={() => signIn("google", {callbackUrl: "/prispevok"})}
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom Google
      </Button>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GitHubIcon />}
        sx={{ mb: 1 }}
      >
        Registrovať sa účtom GitHub
      </Button>

    </Container>
  );
}