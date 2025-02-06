// src/app/gdpr/page.tsx

import { Container, Typography, Box, Paper, Button } from "@mui/material";
import Link from "next/link";

export const metadata = { title: `GDPR | ZoskaSnap` };

export default function GDPR() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <Paper sx={{ width: '100%', maxWidth: 800, padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          Ochrana osobných údajov (GDPR)
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          ZoskaSnap berie ochranu vašich osobných údajov vážne. Podľa Nariadenia
          Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane fyzických osôb
          pri spracúvaní osobných údajov a o voľnom pohybe týchto údajov (GDPR) vám
          poskytujeme informácie o spracúvaní vašich osobných údajov.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Vaše osobné údaje budú spracúvané iba v súlade so zákonnými predpismi,
          a to len na účely, ktoré ste schválili. Tieto údaje nebudú zdieľané s
          tretími stranami bez vášho výslovného súhlasu.
        </Typography>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Link href="/auth/registracia" passHref>
            <Button variant="contained" color="primary">
              Návrat na registráciu
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
