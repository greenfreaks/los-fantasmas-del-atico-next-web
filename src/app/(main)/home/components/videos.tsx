import { SectionTitle } from "./section-title";

const VIDEO_LIST = [
  {
    src: "https://www.youtube.com/embed/oAUf1nZVIZE?si=SCzXHIF6oA8Ud3eT",
    title: "LA PLAGA",
  },
  {
    src: "https://www.youtube.com/embed/Ec0xUbN345g?si=XCgG7Oj4DOlUi6fd",
    title: "HOUND DOG",
  },
  {
    src: "https://www.youtube.com/embed/V59-xWYHFpM?si=fd-pL5rTrpiRzFTY",
    title: "SUENA MI ESQUELETO",
  },
];
export const Videos = () => {
  return (
    <div className="">
      <SectionTitle title="NUESTRO SHOW" />
      <div className="">
        <iframe
          className="w-full h-auto aspect-video border-10 border-light-white rounded-md"
          src="https://www.youtube.com/embed/D_b8oEci-6Y?si=p3Y1YiAR1TDbXg-n"
          title="Bule bule | Plaza Comercial La Alameda. Tizayuca, Hidalgo"
          allow="accelerometer; clipboard-write; encrypted-media"
        ></iframe>
        <h4 className="text-title-4 sm:text-super-title text-light-white text-center font-oswald mt-4 uppercase">
          BULE BULE | PLAZA COMERCIAL LA ALAMEDA. TIZAYUCA, HIDALGO
        </h4>
      </div>
      <div className="mt-8 w-full sm:mt-20 sm:flex gap-x-6">
        {VIDEO_LIST.map((video, index) => (
          <div
            className="flex flex-col mb-5 gap-x-3 items-center justify-center sm:w-1/3"
            key={index}
          >
            <iframe
              className="w-full h-auto aspect-video bg-black border-2 border-main p-4 rounded-md"
              src={video.src}
              title={video.title}
              allow="accelerometer; clipboard-write; encrypted-media"
            ></iframe>
            <h4 className="sm:mt-4 sm:text-title-3 text-center font-oswald uppercase">
              {video.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
