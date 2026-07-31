import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { InfoBand } from "./components/infoBand";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <InfoBand />
      <Footer />
    </div>
  );
}