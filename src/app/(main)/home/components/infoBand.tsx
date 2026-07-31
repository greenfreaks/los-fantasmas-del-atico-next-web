import { Events } from "./events";
import { Videos } from "./videos";
import { Members } from "./members";
import { Reviews } from "./reviews";

export const InfoBand = () => {

  return (
    <div className="px-5 sm:px-24">
      <Events />
      <Videos />
      <Members />
      <Reviews />
    </div>
  );
};
