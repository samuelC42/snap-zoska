// src/app/o-mne/page.tsx

import { Container, Typography, Box, Paper, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const metadata = { title: `O mne | ZoskaSnap` };

export default function About() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <Paper sx={{ width: '100%', maxWidth: 800, padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          O mne
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Vitajte na stránke O mne! Moje meno je Samuel a som nadšený tvorca, ktorý sa venuje vývoju a vytváraniu inovatívnych webových aplikácií.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Som študentom Strednej priemyselnej školy elektrotechnickej Zochova v Bratislave, kde sa venujem štúdiu technológií a vývoju softvéru. Pre viac informácií o škole navštívte ich oficiálnu stránku:{" "}
          <Link href="https://zochova.sk/" target="_blank" color="primary" sx={{ fontWeight: 'bold' }}>
            SPŠE Zochova
          </Link>.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          Môžete ma sledovať aj na sociálnych sieťach:
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <Link href="https://www.instagram.com" target="_blank" color="primary" sx={{ textDecoration: 'none' }}>
            <IconButton color="primary">
              <InstagramIcon />
            </IconButton>
            Instagram
          </Link>
          <Link href="https://www.facebook.com" target="_blank" color="primary" sx={{ textDecoration: 'none' }}>
            <IconButton color="primary">
              <FacebookIcon />
            </IconButton>
            Facebook
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
