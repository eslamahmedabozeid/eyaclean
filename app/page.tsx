import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeComponent from "./component/home/HomeComponent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeComponent />
    </div>
  );
}
