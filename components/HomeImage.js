import Image from "next/image";

const HomeImage = ({ imagetextCSS, imageCSS }) => {
  return (
    <div className={imageCSS}>
      <div className={imagetextCSS}>Care. Respect. Empowerment.</div>
      <Image
        src="/home_img.jpg"
        alt="home"
        width={720}
        height={538}
        quality={100}
      />
    </div>
  );
};

export default HomeImage;
