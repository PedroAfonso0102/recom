import { PT_Sans, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'RECOM Metal Duro | Ferramentas de Corte',
  description: 'Distribuição técnica de produtos Mitsubishi Materials e soluções em metal duro para a indústria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${ptSans.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen bg-brand-offwhite text-brand-gray antialiased selection:bg-brand-blue selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
