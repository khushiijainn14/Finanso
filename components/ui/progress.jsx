"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

function Progress({
  className,
  value = 0,
  indicatorColor = "bg-primary", // dynamic color
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full transition-all rounded-full",
          indicatorColor
        )}
        style={{ width: `${value}%` }} // 🔥 instead of transform
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress }
