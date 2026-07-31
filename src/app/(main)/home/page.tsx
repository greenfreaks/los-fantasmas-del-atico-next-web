import { Banner } from "./components/Banner";
import { BannerForMobile } from "./components/banner-for-mobile";
import { Header } from "./components/Header";
import { InfoBand } from "./components/infoBand";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      {/* <BannerForMobile /> */}
      <InfoBand />
      <Footer />
    </div>
  );
}