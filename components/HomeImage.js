import Image from "next/image";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import HomeImageCSS from "../styles/HomeImage.module.css";
import SubscribePopup from "./SubscribePopup";

const HomeImage = ({ EN }) => {
  const data = EN ? dataEN : dataVN;
  return (
    <div className={HomeImageCSS.image}>
      <div className={HomeImageCSS.imagecontainer}>
        <div className={HomeImageCSS.imagetext}>{data.home.imagetext}</div>
        <div className={HomeImageCSS.destext}>{data.home.text}</div>
        <div className={HomeImageCSS.button}>
          <SubscribePopup EN={EN}>
            <div className={HomeImageCSS.newsletterbutton}>
              {data.home.button}
            </div>
          </SubscribePopup>
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
