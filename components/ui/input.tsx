import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  icon,
  iconBgColor = "bg-primary",
  ...props
}: React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  iconBgColor?: string;
}) {
  if (icon) {
    return (
      <div className={cn(
        "flex focus-within:ring-[3px] focus-within:ring-ring/50 rounded-md transition-[color,box-shadow]",
        className
      )}>
        <input
          type={type}
          data-slot="input"
          className={cn(
            "peer file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-l-md border border-r-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          )}
          {...props}
        />
        <div className={cn(
          "flex items-center justify-center w-10 h-8 text-primary-foreground rounded-r-md border border-l-0 border-input peer-focus-visible:border-ring peer-aria-invalid:border-destructive",
          iconBgColor
        )}>
          {icon}
        </div>
      </div>
    )
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}
Input.displayName = "Input"

export { Input }