import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "alt" | "primary";
  tornTop?: boolean;
  tornBottom?: boolean;
}

export function Section({ 
  className, 
  variant = "default", 
  tornTop = false, 
  tornBottom = false,
  children, 
  ...props 
}: SectionProps) {
  const bgColors = {
    default: "bg-transparent",
    alt: "bg-white/50 backdrop-blur-sm",
    primary: "bg-primary text-primary-foreground",
  };

  return (
    <section 
      className={cn(
        "relative py-16 md:py-24", 
        bgColors[variant],
        tornTop && "torn-edge-top pt-24",
        tornBottom && "torn-edge-bottom pb-24",
        className
      )} 
      {...props}
    >
      {children}
    </section>
  );
}
