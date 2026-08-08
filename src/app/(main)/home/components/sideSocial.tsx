import Image from "next/image"
import { whatsappMessage } from "../utils/whatsapp-message"
import facebook from "@/src/assets/icons/facebook.webp"
import instagram from "@/src/assets/icons/instagram.webp"
import whatsapp from "@/src/assets/icons/whatsapp.webp"
import youtube from "@/src/assets/icons/youtube.webp"
import tiktok from "@/src/assets/icons/tiktok.webp"

interface SideSocialProps{
  icon: string
  url: string
}
const SOCIAL_LIST: SideSocialProps[] = [
  {
    icon: whatsapp.src,
    url: whatsappMessage(),
  },
  {
    icon: facebook.src,
    url: "https://www.facebook.com/losfantasmasdelatico",
  },
  {
    icon: youtube.src,
    url: "https://www.youtube.com/@LosFantasmasdel%C3%81tico",
  },
  {
    icon: instagram.src,
    url: "https://www.instagram.com/losfantasmasdelatico?igsh=MXA4MGF0Ym9wbjl2cQ==",
  },
  {
    icon: tiktok.src,
    url: "https://www.tiktok.com/@losfantasmasdelatico?_r=1&_t=ZS-98hWTgzra5d",
  }
];

export const SideSocial = () => {
  return (
    <div className="flex gap-x-4 sm:flex-col sm:gap-y-4">
      {SOCIAL_LIST.map((social, index) => (
        <a href={social.url} key={index} target="_blank" rel="noopener noreferrer">
          <Image src={social.icon} alt="Social Icon" width={30} height={30} />
        </a>
      ))}
    </div>
  )
}