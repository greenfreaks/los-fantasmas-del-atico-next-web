import { SectionTitle } from "./section-title";
import Image from "next/image";
import Star from "@/src/assets/icons/yellow-star.webp";

interface Review {
  review: string;
  author: string;
}

const REVIEW_LIST: Review[] = [
  {
    review: `¡No puedo esperar a verlos de nuevo! <br /> ¡Fans de por vida!`,
    author: "Maribel R.",
  },
  {
    review: `¡No puedo esperar a verlos de nuevo! <br /> ¡Fans de por vida!`,
    author: "Maribel R.",
  },
  {
    review: `¡No puedo esperar a verlos de nuevo! <br /> ¡Fans de por vida!`,
    author: "Maribel R.",
  },
  {
    review: `¡No puedo esperar a verlos de nuevo! <br /> ¡Fans de por vida!`,
    author: "Maribel R.",
  },
];

export const Reviews = () => {
  return (
    <div>
      <SectionTitle title="RESEÑAS" />
      <div className="flex flex-wrap gap-4 mt-6">
        {REVIEW_LIST.map((review, index) => (
          <div 
            key={index} 
            className="flex flex-1 flex-col justify-center items-center border-2 border-main p-4 rounded-md basis-[calc(50%-8px)] min-w-[280px]"
          >
            <div className="flex gap-x-4 mt-8">
              <Image src={Star.src} alt="Star" width={30} height={30} />
              <Image src={Star.src} alt="Star" width={30} height={30} />
              <Image src={Star.src} alt="Star" width={30} height={30} />
              <Image src={Star.src} alt="Star" width={30} height={30} />
              <Image src={Star.src} alt="Star" width={30} height={30} />
            </div>
            <div className="text-center font-oswald mt-4">
              <p className="text-title-2" dangerouslySetInnerHTML={{ __html: review.review }}></p>
              <p className="text-title-3 mt-4">{review.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};