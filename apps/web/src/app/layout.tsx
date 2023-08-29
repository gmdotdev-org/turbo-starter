import '@/styles/globals.css';

import clsx from 'clsx';
import { type Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: '%s - gm.dev',
    default: 'gm.dev - Good morning, builders',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className="h-full antialiased" lang="en" suppressHydrationWarning>
      <body className={clsx('bg-background flex h-full flex-col')}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
