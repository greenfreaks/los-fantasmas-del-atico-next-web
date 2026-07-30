import { cn } from "@/src/lib/utils";
interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}
export const Button = ({ text, onClick, className}: ButtonProps) => {
  return (
    <button
      className={cn(
        "font-bold py-2 px-4 rounded font-oswald cursor-pointer", className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
