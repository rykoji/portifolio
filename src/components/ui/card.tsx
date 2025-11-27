import { forwardRef, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-3xl border-2 border-slate-200 bg-white shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };

