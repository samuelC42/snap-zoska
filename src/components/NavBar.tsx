
// src/components/NavBar.tsx

"use client"; // Mark this component as a Client Component

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link'; // For Next.js link support

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          label="Domov"
          icon={<HomeIcon />}
          component={Link}
          href="/" // Link to home page
        />
        <BottomNavigationAction
          label="Profily"
          icon={<AccountCircleIcon />}
          component={Link}
          href="/profil" // Link to profiles page
        />
        <BottomNavigationAction
          label="Prispevky"
          icon={<PostAddIcon />}
          component={Link}
          href="/prispevok" // Link to posts page
        />
        <BottomNavigationAction
          label="Prihlasenie"
          icon={<LoginIcon />}
          component={Link}
          href="/auth/prihlasenie" // Link to login page
        />
        <BottomNavigationAction
          label="Registracia"
          icon={<HowToRegIcon />}
          component={Link}
          href="/auth/registracia" // Link to registration page
        />
      </BottomNavigation>
    </Box>
  );
}
