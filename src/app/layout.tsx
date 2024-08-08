import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';
import AuthProvider from '@/providers/auth';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, 'flex flex-col')}>
        <AuthProvider>
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster theme="dark" />
        </AuthProvider>
      </body>
    </html>
  );
}
