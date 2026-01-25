import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = `
      relative inline-flex items-center justify-center gap-2
      font-medium rounded-xl
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]
      disabled:opacity-50 disabled:cursor-not-allowed
      overflow-hidden
    `
    
    const variants = {
      primary: `
        bg-gradient-to-r from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-pink-500
        text-white font-semibold
        shadow-lg shadow-[var(--color-primary-500)]/25
        hover:shadow-xl hover:shadow-[var(--color-primary-500)]/30
        hover:scale-[1.02]
        focus:ring-[var(--color-primary-500)]
        before:absolute before:inset-0 
        before:bg-gradient-to-r before:from-white/20 before:to-transparent
        before:opacity-0 before:transition-opacity
        hover:before:opacity-100
      `,
      secondary: `
        bg-[var(--glass-bg)] backdrop-blur-sm
        text-[var(--text-primary)]
        border border-[var(--glass-border)]
        hover:bg-[var(--glass-border)] hover:border-[var(--glass-border-hover)]
        focus:ring-[var(--glass-border-hover)]
      `,
      ghost: `
        text-[var(--text-secondary)]
        hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg)]
        focus:ring-[var(--glass-border)]
      `,
      outline: `
        border-2 border-[var(--color-primary-500)]/50
        text-[var(--color-primary-500)]
        hover:bg-[var(--color-primary-500)]/10 hover:border-[var(--color-primary-500)]
        focus:ring-[var(--color-primary-500)]
      `
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Motion-enhanced button for animations
export const MotionButton = motion.create(Button)

export { Button }
export type { ButtonProps }
