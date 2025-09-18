import { cn } from '@/lib/utils'
import React from 'react'

export default function Heading({ className, children}) {
  return (
    <h1 className={cn('text-center text-4xl md:text-5xl font-extrabold', className)}>{children}</h1>
  )
}
