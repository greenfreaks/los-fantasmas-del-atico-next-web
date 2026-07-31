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
    description: `Es bajista por necesidad mas que nada. <br /> Una de las cosas que mas le gustaría es ser bajista en un grupo de cumbias. <br />
      Sus géneros favoritos son el Rockabilly y el Punk Rock.`,
    image: mario.src,
  },
  {
    name: "Pablo",
    role: "GUITARRISTA",
    description: `El si es bajista en un grupo de cumbias. <br />
      Viene de una familia de músicos <br />
      Sus géneros favoritos son La Cumbia, los boleros y el Rock`,
    image: pablo.src,
  },
  {
    name: "Lalo",
    role: "BATERISTA",
    description:
      `Es de rancho.<br />
      El género que más le gusta escuchar y tocar es el Rock N Roll, su vida musical se basa principalmente en ese género.<br />`,
    image: lalo.src,
  },
  {
    name: "Omar",
    role: "TECLADISTA",
    description:
      `Es bien versatil, le sabe a la teoría musical y a la improvisación en su instrumento.
      Toca con Pablo en el mismo grupo de Cumbias.
      Sus géneros favoritos son la Salsa y la Cumbia.`,
    image: omar.src,
  },
];

export const Members = () => {
  return (
    <div>
      <SectionTitle title="LOS FANTASMAS" />
      <div className="flex flex-col md:flex-row sm:gap-x-6 sm:justify-center">
        {MEMBERS_LIST.map((member, index) => (
          <div
            className="mb-6] sm:max-w-1/4 sm:max-w-1/4 border-2 border-main p-3.5 rounded-md h-[600px] sm:min-h-[550px] sm:h-[550px] "
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
              <p
                className="mt-2.5 max-w-full "
                dangerouslySetInnerHTML={{ __html: member.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
