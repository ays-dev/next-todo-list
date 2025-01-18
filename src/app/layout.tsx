import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { TodoProvider } from './context/TodoContext';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Liste de tâches - Next.sj',
  description: 'Todo-list avec Next.js et Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
