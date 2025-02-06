// src/sections/NonAuthHomeView.tsx

import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function NonAuthHomeView() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mt: 4, fontWeight: 'bold', textAlign: 'center' }}>
        Vitajte na ZoskaSnap!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
        Ste pripravení na nový zážitok? Pripojte sa k našej komunite a začnite
        zdieľať svoje príspevky, inšpirácie a objavujte profily ďalších
        používateľov.
      </Typography>

      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <Button
          component={Link}
          href="/auth/registracia"
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            padding: "12px 24px",
            background: "#fb8c00", // Orange 500 (primary) color
            borderRadius: "30px", // Rounded corners
            boxShadow: "0 4px 20px rgba(251, 140, 0, .3)", // Subtle shadow for orange
            color: "white",
            transition: "all 0.3s ease", // Smooth transition for hover effects
            "&:hover": {
              background: "#f57c00", // Darker shade of orange for hover
              boxShadow: "0 6px 30px rgba(245, 124, 0, .5)", // More pronounced shadow on hover
            },
          }}
        >
          Zaregistrujte sa teraz!
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
        Ešte neviete? Zaregistrujte sa a získajte prístup k exkluzívnemu
        obsahu, ktorý neustále rastie!
      </Typography>
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        Máte už účet?{" "}
        <Typography
          component="a"
          href="/auth/prihlasenie"
          sx={{ textDecoration: "none", color: "primary.main" }}
        >
          Prihláste sa tu
        </Typography>
      </Typography>
    </Container>
  );
}
