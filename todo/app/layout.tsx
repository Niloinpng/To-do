import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";


const poppins = Poppins({ 
  weight: ['400'],
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "Prafazer",
  description: "Lista de Tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
