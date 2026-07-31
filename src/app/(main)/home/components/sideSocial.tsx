import Image from "next/image"
import { whatsappMessage } from "../utils/whatsapp-message"
import facebook from "@/src/assets/icons/facebook.webp"
import instagram from "@/src/assets/icons/instagram.webp"
import whatsapp from "@/src/assets/icons/whatsapp.webp"
import youtube from "@/src/assets/icons/youtube.webp"

interface SideSocialProps{
  icon: string
  url: string
}
const SOCIAL_LIST: SideSocialProps[] = [
  {
    icon: facebook.src,
    url: "https://www.facebook.com/losfantasmasdelatico",
  },
  {
    icon: instagram.src,
    url: "https://www.instagram.com/los_fantasmas_del_atico?igsh=MXRzdTU4MHhybmhhcQ==",
  },
  {
    icon: whatsapp.src,
    url: whatsappMessage(),
  },
  {
    icon: youtube.src,
    url: "https://www.youtube.com/@LosFantasmasdel%C3%81tico",
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