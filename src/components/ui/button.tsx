import { forwardRef, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 hover:border-blue-700',
      outline: 'border-2 border-slate-300 bg-transparent hover:bg-slate-100 text-slate-900',
      secondary: 'bg-white text-slate-900 hover:bg-slate-100 border-2 border-white hover:border-slate-200',
    };
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 px-3 text-sm',
      lg: 'h-12 px-8 text-lg',
    };

    if (asChild && children) {
      return children as React.ReactElement;
    }

    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

