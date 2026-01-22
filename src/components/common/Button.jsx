import React from 'react';
import { cn } from '@/utils/helpers';

/**
 * Button Component - Reusable button with multiple variants
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 active:scale-[0.98]',
    'primary-outline': 'border-2 border-primary-500 text-white bg-transparent hover:bg-primary-500/20 focus:ring-primary-500 active:scale-[0.98]',
    secondary: 'bg-dark-900 text-white hover:bg-dark-800 focus:ring-dark-500 shadow-lg hover:shadow-xl active:scale-[0.98]',
    outline: 'border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-white focus:ring-dark-500 active:scale-[0.98]',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-dark-900 focus:ring-white active:scale-[0.98]',
    'outline-primary': 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 active:scale-[0.98]',
    ghost: 'text-dark-900 hover:bg-gray-100 focus:ring-gray-300 active:scale-[0.98]',
    'ghost-white': 'text-white hover:bg-white/10 focus:ring-white/50 active:scale-[0.98]',
    link: 'text-primary-500 hover:text-primary-600 underline-offset-4 hover:underline p-0',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };
  
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <svg
          className={cn('animate-spin', iconSizes[size], children && 'mr-2')}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={cn(iconSizes[size], children && 'mr-2')} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={cn(iconSizes[size], children && 'ml-2')} />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
