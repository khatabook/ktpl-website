'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MovingBorderButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function MovingBorderButton({ 
  children, 
  href = "#", 
  className,
  size = "lg"
}: MovingBorderButtonProps) {
  // Map md size to default since Button doesn't support md
  const buttonSize = size === "md" ? "default" : size;
  
  return (
    <div className="relative group">
      {/* Moving border effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#DC3444] via-[#B82A37] to-[#DC3444] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      
      {/* Button content */}
      <Button
        asChild
        size={buttonSize}
        className={cn(
          "relative bg-[#DC3444] hover:bg-[#B82A37] border-[#DC3444] text-white font-semibold transition-all duration-300 group-hover:scale-105",
          className
        )}
      >
        <Link href={href}>
          <span className="relative z-10">{children}</span>
        </Link>
      </Button>
    </div>
  )
}
