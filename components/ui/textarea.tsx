import * as React from 'react'
import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-[100px] w-full rounded-xl border border-border/80 bg-card px-4 py-3 text-sm text-foreground placeholder:text-slate-500 dark:placeholder:text-slate-400 placeholder:opacity-90 shadow-sm transition-all outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
