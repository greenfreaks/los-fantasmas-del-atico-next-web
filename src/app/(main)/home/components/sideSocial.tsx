import Image from "next/image"
import facebook from "@/src/assets/icons/facebook.webp"
import instagram from "@/src/assets/icons/instagram.webp"
import whatsapp from "@/src/assets/icons/whatsapp.webp"

export const SideSocial = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Image src={facebook} alt="Facebook" width={30} height={30} />
      <Image src={instagram} alt="Instagram" width={30} height={30} />
      <Image src={whatsapp} alt="Instagram" width={30} height={30} />
    </div>
  )
}