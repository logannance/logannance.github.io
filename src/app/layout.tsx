import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme/theme';
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Logan Nance Portfolio",
  description: "Created using NextJS and MUI",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}> 
      {/* <body style={{ minWidth: '500px' }}> */}
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
                <AppBar position="static">
                  <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Button variant="text" color="inherit" LinkComponent={Link}
                        href="/"
                      >
                        <Typography variant="h6">Logan Nance</Typography>
                      </Button>
                    </Box>
                    <Button variant="text" color="inherit" LinkComponent={Link}
                      href="/"
                    >
                      Resume
                    </Button>
                    <Button variant="text" color="inherit" LinkComponent={Link}
                      href="https://loen10.itch.io/circleo" target="_blank"
                    >
                      Circleo
                    </Button>
                    <Button variant="text" color="inherit" LinkComponent={Link}
                      href="/chess"
                    >
                      Chess
                    </Button>
                  </Toolbar>
                </AppBar>
                {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
