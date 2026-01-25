import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-full
      transition-all duration-200
    `
    
    const variants = {
      default: `
        bg-[var(--glass-bg)] text-[var(--text-secondary)]
        border border-[var(--glass-border)]
        hover:bg-[var(--glass-border)] hover:border-[var(--glass-border-hover)]
      `,
      primary: `
        bg-[var(--color-primary-500)]/15 text-[var(--color-primary-500)]
        border border-[var(--color-primary-500)]/30
        hover:bg-[var(--color-primary-500)]/25
      `,
      secondary: `
        bg-[var(--color-accent-500)]/15 text-[var(--color-accent-500)]
        border border-[var(--color-accent-500)]/30
        hover:bg-[var(--color-accent-500)]/25
      `,
      outline: `
        bg-transparent text-[var(--text-secondary)]
        border border-[var(--glass-border-hover)]
        hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]
      `,
      success: `
        bg-emerald-500/15 text-emerald-600
        border border-emerald-500/30
        dark:text-emerald-400
      `,
      warning: `
        bg-amber-500/15 text-amber-600
        border border-amber-500/30
        dark:text-amber-400
      `
    }
    
    const sizes = {
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm'
    }
    
    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
