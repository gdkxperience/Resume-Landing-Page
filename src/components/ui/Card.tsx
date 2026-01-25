import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'glow'
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, padding = 'md', children, ...props }, ref) => {
    const baseStyles = `
      relative rounded-2xl
      transition-all duration-300 ease-out
    `
    
    const variants = {
      default: `
        bg-[var(--glass-bg)]
        border border-[var(--glass-border)]
        ${hover ? 'hover:border-[var(--color-primary-500)]/30 hover:bg-[var(--glass-bg-hover)]' : ''}
      `,
      glass: `
        bg-[var(--glass-bg)]
        backdrop-blur-xl
        border border-[var(--glass-border)]
        ${hover ? 'hover:bg-[var(--glass-bg-hover)] hover:border-[var(--color-primary-500)]/30' : ''}
      `,
      gradient: `
        bg-[var(--card-gradient-from)]
        border border-[var(--glass-border)]
        ${hover ? 'hover:border-[var(--color-primary-500)]/30' : ''}
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-[var(--color-primary-500)]/10 before:to-[var(--color-accent-500)]/10
        before:opacity-0 before:transition-opacity
        ${hover ? 'hover:before:opacity-100' : ''}
      `,
      glow: `
        bg-[var(--glass-bg)]
        border border-[var(--glass-border)]
        shadow-lg shadow-[var(--color-primary-500)]/5
        ${hover ? 'hover:shadow-xl hover:shadow-[var(--color-primary-500)]/10 hover:border-[var(--color-primary-500)]/30' : ''}
      `
    }
    
    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }
    
    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Motion-enhanced card
export const MotionCard = motion.create(Card)

// Card subcomponents
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-xl font-semibold text-[var(--text-primary)]', className)} {...props} />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-[var(--text-secondary)] mt-1', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 pt-4 border-t border-[var(--glass-border)]', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export type { CardProps }
