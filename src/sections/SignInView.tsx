// src/sections/SignInView.tsx

"use client";

import {
  Button,
  Container,
  Paper,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SignInView() {
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
          Prihlásenie
        </Typography>

        {/* Sign-up Link */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="body1">
            Nemáte účet?{" "}
            <Typography
              component="a"
              href="/auth/registracia"
              sx={{ textDecoration: "none", color: "primary.main" }}
            >
              Registrujte sa
            </Typography>
          </Typography>
        </Box>

        {/* Google Sign-In */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => signIn("google", { callbackUrl: "/prispevok" })}
          sx={{ mb: 2 }}
        >
          Prihlásiť sa účtom Google
        </Button>

        {/* GitHub Sign-In */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<GitHubIcon />}
          sx={{ mb: 2 }}
        >
          Prihlásiť sa účtom GitHub
        </Button>

      </Paper>
    </Container>
  );
}
