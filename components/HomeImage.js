import Image from "next/image";

const HomeImage = ({ imagetextCSS, imageCSS }) => {
  return (
    <div className={imageCSS}>
      <div className={imagetextCSS}>Care. Respect. Empowerment.</div>
      <Image
        src="/home_img.png"
        alt="home"
        fill={true}
        quality={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default HomeImage;
