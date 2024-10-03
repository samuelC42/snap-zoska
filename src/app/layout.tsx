import type { Metadata } from "next";
import "./globals.css";
import SimpleBottomNavigation from "@/components/NavBar";

export const metadata: Metadata = {
  title: "SnapZoska",
  description: "Created by Samo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {/* Main content */}
          <div style={{ flexGrow: 1 }}>{children}</div>
          
          {/* Bottom Navigation */}
          <SimpleBottomNavigation /> {/* Navbar at the bottom */}
        </div>
      </body>
    </html>
  );
}
