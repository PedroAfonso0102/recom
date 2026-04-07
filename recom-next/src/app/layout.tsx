import type { Metadata } from "next";
import { PT_Sans } from 'next/font/google';
import "./globals.css";

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RECOM Metal Duro",
  description: "Ferramentas de Metal Duro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={ptSans.className}>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
