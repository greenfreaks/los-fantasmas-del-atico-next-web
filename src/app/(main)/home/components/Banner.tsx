import banner from "@/src/assets/banner.webp";
import { SideSocial } from "./sideSocial";
import { Label } from "./Label";
import { Button } from "./Button";

export const Banner = () => {
  return (
    <div
      className="relative w-full min-h-[400px] md:min-h-[706px] bg-cover bg-top bg-no-repeat flex flex-col md:flex-row items-center md:items-start p-6 sm:p-10 md:p-12 lg:px-16 gap-8"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 80%, #000000 100%), url(${banner.src})`,
      }}
    >
      {/* Capa para oscurecer la imagen SOLO en móviles */}
      <div className="absolute inset-0 bg-black/60 md:hidden pointer-events-none" />

      {/* Redes sociales laterales (Alineadas arriba) */}
      <div className="hidden md:block shrink-0 z-10">
        <SideSocial />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 w-full md:max-w-xl lg:max-w-2xl flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="font-lobster text-title-1 text-4xl sm:text-5xl md:text-6xl lg:text-super-title mb-4 leading-tight leading-none">
          Los Fantasmas <br className="hidden sm:inline" /> del Ático
        </h1>

        {/* Descripción */}
        <p className="text-sm font-medium sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-prose">
          Una banda que desata la fuerza del rock & roll, rockabilly y surf con un estilo propio y una actitud explosiva. Cada show es una descarga de energía, guitarras encendidas y ritmo contagioso que transforma cualquier escenario en una verdadera fiesta.
        </p>

        {/* Botón de Acción */}
        <Button
          className="bg-secondary hover:bg-hover-secondary active:bg-active-secondary text-black w-9/12 sm:w-1/2 sm:px-8 mt-8 h-14 font-semibold transition-all"
          text="CONTACTAR BANDA"
        />
      </div>
    </div>
  );
};