"use client";

import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Avatar,
  IconButton,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import DarkModeButton from "@/components/DarkModeButton";

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const router = useRouter();
  const { data: session, status } = useSession();
  const theme = useTheme(); // Get the current theme

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  // Non-authenticated navigation paths
  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    //{ label: "GDPR", value: "/gdpr", icon: <GavelIcon /> },
    //{ label: "Podmienky", value: "/podmienky", icon: <PrivacyTipIcon /> },
    { label: "O mne", value: "/o-mne", icon: <AddCircleIcon /> },
    {
      label: "Registrácia",
      value: "/auth/registracia",
      icon: <AppRegistrationIcon />,
    },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  // Authenticated navigation paths
  const authPaths = [
    { label: "Domov", value: "/prispevok", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladat", icon: <SearchIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar
          alt={session?.user?.name || "User"}
          src={session?.user?.image || undefined}
        />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  // Decide which paths to use based on authentication status
  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper, // Dynamically apply background color
      }}
    >
      <BottomNavigation
        sx={{
          flex: 1,
          backgroundColor: theme.palette.background.paper, // Adjusted for dark mode
          color: theme.palette.text.primary, // Ensure text color is appropriate
        }}
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={path.icon}
          />
        ))}
      </BottomNavigation>
      <Box sx={{ p: 1, backgroundColor: theme.palette.background.paper }}> {/* Adjusted for dark mode */} 
        <DarkModeButton />
      </Box>
    </Box>
  );
}
