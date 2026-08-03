import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMYTH — 1:1 Strength & Movement Coach",
  description: "Private strength and conditioning coaching by Amitkumar Yadav.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
