// src/app/podmienky/page.tsx

import { Container, Typography, Box, Paper, Button } from "@mui/material";
import Link from "next/link";

export const metadata = { title: `Podmienky | ZoskaSnap` };

export default function TermsCondition() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <Paper sx={{ width: '100%', maxWidth: 800, padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          Podmienky používania
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Vitajte na ZoskaSnap! Pred použitím našich služieb si, prosím, prečítajte
          nasledujúce podmienky používania. Používaním našich služieb súhlasíte s týmito
          podmienkami a všetkými platnými právnymi predpismi.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          Naša služba umožňuje používateľom zdieľať príspevky, interagovať s ostatnými
          používateľmi a zobraziť ich profily. Pri používaní tejto služby sú používatelia
          zodpovední za správnosť a zákonnosť svojho obsahu.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          ZoskaSnap si vyhradzuje právo zablokovať účet používateľa, ktorý porušuje
          tieto podmienky alebo vykonáva nelegálne aktivity. Naša služba je dostupná len
          pre osoby, ktoré sú staršie ako 13 rokov.
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
