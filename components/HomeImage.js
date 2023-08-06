import Image from "next/image";
import WhiteButton from "../components/WhiteButton";
import { data } from "../components/data";
import HomeImageCSS from "../styles/HomeImage.module.css";

const HomeImage = () => {
  return (
    <div className={HomeImageCSS.image}>
      <div className={HomeImageCSS.imagecontainer}>
        <div className={HomeImageCSS.imagetext}>{data.home.imagetext}</div>
        <div className={HomeImageCSS.destext}>{data.home.text}</div>
        <div className={HomeImageCSS.button}>
          <WhiteButton>{data.home.button}</WhiteButton>
        </div>
      </div>
      <Image
        src={data.home.image}
        alt={data.home.alt}
        fill={true}
        quality={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default HomeImage;
