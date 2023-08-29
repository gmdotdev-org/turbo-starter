import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const highlightVariants = cva('font-semibold px-0.5', {
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface HighlightProps
  extends React.BaseHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof highlightVariants> {}

const Highlight = React.forwardRef<HTMLSpanElement, HighlightProps>(
  ({ className, variant, ...props }, ref) => {
    return <span className={cn(highlightVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
Highlight.displayName = 'Highlight';

export { Highlight, highlightVariants };
