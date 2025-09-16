import { cn } from '@/lib/utils'
import React from 'react'


const colors = {
    green: 'bg-green-500 hover:bg-green-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
    blue: 'bg-blue-500 hover:bg-blue-600'

}
export default function Button({ className, color, ...props }) {

    const colorVariant = colors[color]

    return (
        <button className={cn(colorVariant, "py-3 font-semibold", className)} {...props} />
    )
}
