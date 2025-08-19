import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./componets/Navbar";
import Rodape from "./componets/Rodape";

export const metadata: Metadata = {
  title: "rotas",
  description: "Criando um projeto com rotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-[100dvh]">
        <Navbar />
          {children}
        <Rodape />
      </body>
    </html>
  );
}