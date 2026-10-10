import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nitin — Software Engineer",
  description:
    "Software engineer focused on building fast, accessible, and well-crafted web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
