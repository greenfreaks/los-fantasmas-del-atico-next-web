import { cn } from "@/src/lib/utils"

interface DecorationLineProps {
  className?: string;
}
export const DecorationLine = ({className}: DecorationLineProps) => {
  return(
    <div className={cn("min-w-5 h-1 bg-main", className)}></div>
  )
}