import Star from "@/src/assets/icons/red-star.webp";
import { DecorationLine } from "./decoration-line";
import Image from "next/image";

interface SectionTitleProps {
  title: string;
}
export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="w-full flex justify-center items-center gap-x-10 mt-20 mb-6 uppercase">
      <div className="flex-1 flex flex-row items-center justify-center gap-x-5">
        <DecorationLine className="w-full" />
        <Image src={Star.src} alt="Star" width={20} height={20} /> 
      </div>
      <h2 className="font-oswald text-title-2 text-light-white">{title}</h2>
     <div className="flex-1 flex flex-row items-center justify-center gap-x-5">
        <Image src={Star.src} alt="Star" width={20} height={20} /> 
        <DecorationLine className="w-full" />
      </div>
    </div>
  )
}