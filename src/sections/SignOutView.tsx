// src/sections/SignOutView.tsx

"use client";

import { signOut } from "next-auth/react";
import { Button, Container, Typography, Box, Paper } from "@mui/material";

export default function SignOutView() {
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
          Naozaj sa chcete odhlásiť?
        </Typography>

        {/* Sign-Out Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => signOut({ callbackUrl: "/" })}
            sx={{ mb: 3 }}
          >
            Odhlásiť sa
          </Button>
        </Box>

      </Paper>
    </Container>
  );
}
