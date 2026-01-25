import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'tech' | 'gradient'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium rounded-full
      transition-all duration-300 ease-out
    `
    
    const variants = {
      default: `
        bg-[var(--glass-bg)] text-[var(--text-secondary)]
        border border-[var(--glass-border)]
        hover:bg-[var(--glass-bg-hover)] hover:border-[var(--glass-border-hover)]
        hover:text-[var(--text-primary)]
      `,
      primary: `
        bg-gradient-to-r from-[var(--color-primary-500)]/20 to-[var(--color-primary-600)]/15
        text-[var(--color-primary-400)]
        border border-[var(--color-primary-500)]/30
        hover:from-[var(--color-primary-500)]/30 hover:to-[var(--color-primary-600)]/25
        hover:border-[var(--color-primary-500)]/50
        hover:shadow-sm hover:shadow-[var(--color-primary-500)]/20
      `,
      secondary: `
        bg-gradient-to-r from-[var(--color-accent-500)]/20 to-[var(--color-accent-600)]/15
        text-[var(--color-accent-400)]
        border border-[var(--color-accent-500)]/30
        hover:from-[var(--color-accent-500)]/30 hover:to-[var(--color-accent-600)]/25
        hover:border-[var(--color-accent-500)]/50
        hover:shadow-sm hover:shadow-[var(--color-accent-500)]/20
      `,
      outline: `
        bg-transparent text-[var(--text-secondary)]
        border border-[var(--glass-border-hover)]
        hover:bg-gradient-to-r hover:from-[var(--color-primary-500)]/10 hover:to-[var(--color-accent-500)]/10
        hover:text-[var(--text-primary)]
        hover:border-[var(--color-primary-500)]/30
      `,
      success: `
        bg-gradient-to-r from-emerald-500/20 to-teal-500/15
        text-emerald-400
        border border-emerald-500/30
        hover:from-emerald-500/30 hover:to-teal-500/25
        hover:shadow-sm hover:shadow-emerald-500/20
      `,
      warning: `
        bg-gradient-to-r from-amber-500/20 to-orange-500/15
        text-amber-400
        border border-amber-500/30
        hover:from-amber-500/30 hover:to-orange-500/25
        hover:shadow-sm hover:shadow-amber-500/20
      `,
      tech: `
        bg-gradient-to-r from-[var(--glass-bg)] to-[var(--glass-bg-hover)]
        text-[var(--text-primary)]
        border border-[var(--glass-border)]
        hover:from-[var(--color-primary-500)]/15 hover:to-[var(--color-accent-500)]/15
        hover:border-[var(--color-primary-500)]/40
        hover:text-[var(--color-primary-400)]
        hover:shadow-md hover:shadow-[var(--color-primary-500)]/10
        hover:-translate-y-0.5
      `,
      gradient: `
        bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)]
        text-white font-semibold
        border-0
        shadow-lg shadow-[var(--color-primary-500)]/25
        hover:shadow-xl hover:shadow-[var(--color-primary-500)]/30
        hover:-translate-y-0.5
      `
    }
    
    const sizes = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3.5 py-1.5 text-sm'
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
