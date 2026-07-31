import Image from "next/image";
import bgRed from "@/src/assets/reg-bg.webp";
import mario from "@/src/assets/mario.webp";
import pablo from "@/src/assets/pablo.webp";
import lalo from "@/src/assets/lalo.webp";
import omar from "@/src/assets/omar.webp";
import { SectionTitle } from "./section-title";

interface Member {
  image: string;
  name: string;
  role: string;
  description: string;
}

const MEMBERS_LIST: Member[] = [
  {
    name: "Mario",
    role: "VOCALISTA / BAJISTA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumen",
    image: mario.src,
  },
  {
    name: "Pablo",
    role: "GUITARRISTA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumen",
    image: pablo.src,
  },
  {
    name: "Lalo",
    role: "BATERISTA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumen",
    image: lalo.src,
  },
  {
    name: "Omar",
    role: "TECLADISTA",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odit accusamus est praesentium, culpa veniam dicta exercitationem tempora quaerat assumen",
    image: omar.src,
  },
];

export const Members = () => {
  return (
    <div>
      <SectionTitle title="LOS FANTASMAS" />
      <div className="flex flex-col md:flex-row sm:gap-y-8 sm:justify-center">
        {MEMBERS_LIST.map((member, index) => (
          <div
            className="mb-6 sm:max-w-1/4 border-2 border-main p-3.5 rounded-md h-[600px] sm:h-[550px] "
            key={index}
          >
            <div
              className="bg-cover bg-top bg-no-repeat w-full flex justify-center items-end rounded-md h-64"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, #000000 100%), url(${bgRed.src})`,
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={220}
                height={220}
                className="h-[220px] w-auto object-contain"
              />
            </div>
            <div className="mt-2.5">
              <h3 className="text-title-3 font-oswald text-light-white uppercase">
                {member.name}
              </h3>
              <p className="font-bold text-light-white text-letter-small">
                {member.role}
              </p>
              <p className="mt-2.5">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
