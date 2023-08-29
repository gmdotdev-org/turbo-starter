import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const headingVariants = cva('font-display scroll-m-20 font-semibold', {
  variants: {
    level: {
      h1: 'text-4xl lg:text-5xl',
      h2: 'border-b pb-2 text-3xl transition-colors',
      h3: 'text-2xl',
      h4: 'text-xl',
    },
  },
  defaultVariants: {
    level: 'h1',
  },
});

export interface HeadingProps
  extends React.BaseHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, ...props }, ref) => {
    const Comp = level ? level : 'h1';
    return <Comp className={cn(headingVariants({ level, className }))} ref={ref} {...props} />;
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
