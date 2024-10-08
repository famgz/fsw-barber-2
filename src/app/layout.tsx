import Footer from '@/components/footer';
import { cn } from '@/lib/utils';
import AuthProvider from '@/providers/auth';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Barbershop Hub',
  description: 'Aqui você encontra sua barbearia favorita',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(font.className, 'flex flex-col')}>
        <AuthProvider>
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster theme="dark" />
        </AuthProvider>
      </body>
    </html>
  );
}
