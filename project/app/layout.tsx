'use client';

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zemenay Tech Solutions</title>
        <meta name="description" content="Zemenay Tech Solutions - Professional Technology Services" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/Zemenay Logo Red.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Zemenay Logo Red.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Zemenay Logo Red.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/Zemenay Logo Red.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/Zemenay Logo Red.png" />
        
        {/* Additional meta tags for better favicon support */}
        <meta name="theme-color" content="#DC2626" />
        <meta name="msapplication-TileColor" content="#DC2626" />
      </head>
      <body className="font-zemenay">
        <div className="min-h-screen bg-black flex flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}