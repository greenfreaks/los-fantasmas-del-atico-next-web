import { title } from "process";
import { SectionTitle } from "./section-title";

const VIDEO_LIST = [
  {
    src: "https://www.youtube.com/embed/oAUf1nZVIZE?si=SCzXHIF6oA8Ud3eT",
    title: "LA PLAGA"
  },
  {
    src: "https://www.youtube.com/embed/Ec0xUbN345g?si=XCgG7Oj4DOlUi6fd",
    title: "HOUND DOG"
  },
  {
    src: "https://www.youtube.com/embed/V59-xWYHFpM?si=fd-pL5rTrpiRzFTY",
    title: "SUENA MI ESQUELETO"
  }
]
export const Videos = () => {
  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <SectionTitle title="NUESTRO SHOW" />
      <div className="">
        <video
          className="w-full border-10 border-light-white rounded-md"
          src="/videos/bule-bule.mp4"
          controls
        ></video>
        <h4 className="text-super-title text-light-white text-center font-oswald mt-4 uppercase">
          BULE BULE | PLAZA COMERCIAL LA ALAMEDA. TIZAYUCA, HIDALGO
        </h4>
      </div>
      <div className="mt-20 flex gap-x-6">
        {VIDEO_LIST.map((video, index) => (
          <div className="flex flex-col items-center justify-center w-1/3" key={index}>
          <iframe
          className="w-full h-auto aspect-video bg-black border-2 border-main p-4 rounded-md"
            src={video.src}
            title={video.title}
            allow="accelerometer; clipboard-write; encrypted-media"
          ></iframe>
          <h4 className="mt-4 text-title-3 text-center font-oswald uppercase">{video.title}</h4>
        </div>
        ))}
      </div>
    </div>
  );
};
