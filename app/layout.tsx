import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulrahman Adebola Agbaje | Full-Stack Software Engineer",
  description: "Portfolio of Abdulrahman Adebola Agbaje, a Full-Stack Software Engineer based in Lagos, Nigeria",
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
