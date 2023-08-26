import Image from "next/image";
import AboutImageCSS from "../styles/AboutImage.module.css";

export default function AboutImage() {
  return (
    <div className={AboutImageCSS.container}>
      <div>
        <Image
          src="/about_img.jpg"
          alt="story"
          height={410}
          width={342}
          quality={100}
        />
      </div>
      <div>
        <Image
          src="/about_sticker.png"
          alt="story"
          height={50}
          width={25}
          quality={100}
          className={AboutImageCSS.storysticker1}
        />
      </div>
      <div>
        <Image
          src="/about_sticker.png"
          alt="story"
          height={50}
          width={25}
          quality={100}
          className={AboutImageCSS.storysticker2}
        />
      </div>
    </div>
  );
}
