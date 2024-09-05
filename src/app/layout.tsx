import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import  {Header} from '@/app/components/header'


export const metadata: Metadata = {
  title: "Brendon Sants - santsmcb",
  description: "Portifolio proficional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
