import Image from "next/image";
import Shipment from "./components/Shipment/Shipment";
import Header from "./components/Header";
import Bargraph from "./components/Bargraph/bargraph"
import ShortStock from "./components/ShortStock/ShortStock"
import PalletPattern from "./components/PalletPattern/PalletPatter";

export default function Home() {
  return (
    <>
    <Header />
    <Shipment />
    <Bargraph />
    <ShortStock />
    <PalletPattern />
    </>
  );
}
