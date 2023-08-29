'use client';

import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      className="fill-muted-foreground stroke-muted-foreground hover:fill-muted-foreground hover:stroke-muted-foreground"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="icon"
      variant="outline"
    >
      <span className="sr-only">Toggle mode</span>
      {!theme || theme === 'dark' ? (
        <SunIcon className="h-6 w-6 transition" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </Button>
  );
}
