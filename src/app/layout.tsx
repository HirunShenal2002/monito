import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Monito",
  description: "Monito Pet store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >
        {children}
      </body>
    </html>
  );
}
