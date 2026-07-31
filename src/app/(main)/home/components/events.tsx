import Image from "next/image";
import Location from "@/src/assets/location.webp";
import { SectionTitle } from "./section-title";

interface Event {
  name: string;
  date: Date;
  place: string;
  state: string;
  location: string;
}

const EVENT_LIST: Event[] = [
  {
    name: "ROCK N ROLL PARA CUMPLEAÑOS",
    date: new Date("2026-07-31T22:00:00"),
    place: "Evento Privado",
    state: "Tizayuca",
    location: "https://goo.gl/maps/6Z1g5k1k1k1k1k1k1",
  },
  {
    name: "ROCK N ROLL PARA TIZAYUCA",
    date: new Date("2026-08-09T16:00:00"),
    place: "Alameda Comercial",
    state: "Tizayuca, Hgo",
    location: "https://goo.gl/maps/6Z1g5k1k1k1k1k1k1",
  },
];

export const Events = () => {
  return (
    <div className="w-full">
      <SectionTitle title="PRÓXIMOS EVENTOS" />

      {/* Contenedor Flex envoltura con gap entre tarjetas */}
      <div className="flex flex-wrap gap-4 w-full mt-6">
        {EVENT_LIST.map((event, index) => {
          // Formateadores de fecha opcionales dinámicos
          const dayName = event.date.toLocaleDateString("es-ES", {
            weekday: "long",
          });
          const dayNum = event.date.getDate();
          const monthName = event.date.toLocaleDateString("es-ES", {
            month: "long",
          });
          const time = event.date.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });

          return (
            <div
              key={index}
              className="flex-1 basis-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] sm:flex border-2 p-5 rounded-3xl gap-x-6 min-w-[280px]"
            >
              {/* Bloque Fecha */}
              <div className="bg-main sm:w-32 flex flex-col justify-center items-center rounded-md font-oswald text-light-white uppercase p-3 shrink-0 min-w-[90px]">
                <p className="text-title-4">{dayName}</p>
                <p className="text-title-1 leading-none my-1">{dayNum}</p>
                <p className="text-title-5">{monthName}</p>
              </div>

              {/* Detalle Evento */}
              <div className="flex flex-col justify-between">
                <div className="uppercase">
                  <h3 className="font-oswald mt-4 text-title-4 sm:text-title-3 text-light-white">
                    {event.name}
                  </h3>
                  <p className="text-secondary font-semibold">{time} HRS</p>
                </div>

                <div className="flex items-start gap-x-3 mt-3">
                  <Image
                    src={Location.src}
                    alt="Location icon"
                    width={22}
                    height={22}
                    className="shrink-0"
                  />
                  <div>
                    <p className="font-semibold">{event.place}</p>
                    <p>{event.state}.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
