"use client";

import Header from "@/components/Header/Header";
import "../styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <Header />
          {children}
      </body>
    </html>
  );
}
