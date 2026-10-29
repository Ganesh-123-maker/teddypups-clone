import type { ReactNode } from 'react';
import './globals.css';
import { Header, Footer } from '../components/Header';

export const metadata = {
  title: 'TeddyPups U.A.E. — Premium teacup puppies in Dubai',
  description:
    'Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
