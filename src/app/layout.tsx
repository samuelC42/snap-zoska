// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import theme from "../theme";
import DarkModeButton from "@/components/DarkModeButton";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >                
              <Box style={{ display: "flex", flexDirection: "row-reverse", position: "fixed", width: "100%",}}>
                <DarkModeButton />
              </Box>
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            <Navbar />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
