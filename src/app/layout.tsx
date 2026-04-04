import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
});

export const metadata = {
  title: 'RECOM Metal Duro - Ferramentas de Corte Industrial',
  description: 'Distribuidor autorizado Mitsubishi Materials e representante de marcas líderes em usinagem. Tradição e expertise técnica desde 1990.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${ptSans.variable}`}>
      <body className="flex flex-col min-h-screen font-sans bg-brand-off-white text-brand-gray">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
