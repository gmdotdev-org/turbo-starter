import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils';

const bodyVariants = cva('leading-7', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface BodyProps
  extends React.BaseHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof bodyVariants> {}

const Body = React.forwardRef<HTMLHeadingElement, BodyProps>(
  ({ className, size, ...props }, ref) => {
    return <p className={cn(bodyVariants({ size, className }))} ref={ref} {...props} />;
  }
);
Body.displayName = 'Body';

export { Body, bodyVariants };
