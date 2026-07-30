import banner from "@/src/assets/banner.webp";
import { SideSocial } from "./sideSocial";
import { Label } from "./Label";
import { Button } from "./Button";

export const Banner = () => {
  return (
    <div className="bg-cover bg-top bg-no-repeat bg-linear-to-t from bg-cyan-500 to-black w-full flex flex-row min-h-[706px]" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, #000000 100%), url(${banner.src})`
      }} >
      <div className="pl-12 py-12">
        <SideSocial />
      </div>
      <div className="absolute left-30 top-25 max-w-2/5">
        <h1 className="text-4xl font-lobster mb-4 text-super-title">
          Los Fantasmas <br /> del Ático
        </h1>
        <div className="flex flex-row gap-4 mt-3">
          <Label text="Rock N Roll" />
          <Label text="Rockabilly" />
          <Label text="Blues" />
        </div>
        <p className="mt-8">Una banda que desata la fuerza del rock & roll, rockabilly y surf con un estilo propio y una actitud explosiva. Cada show es una descarga de energía, guitarras encendidas y ritmo contagioso que transforma cualquier escenario en una verdadera fiesta.</p>

        <Button className="bg-secondary hover:bg-hover-secondary active:bg-active-secondary  text-black w-2/4 mt-9 h-14" text="CONTACTAR BANDA" />
      </div>
    </div>
  );
};
