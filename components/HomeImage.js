import Image from "next/image";

const HomeImage = ({ imagetextCSS, imageCSS, image, alt = "" }) => {
  return (
    <div className={imageCSS}>
      <div className={imagetextCSS}>Care. Respect. Empowerment.</div>
      <Image
        src={image}
        alt={alt}
        fill={true}
        quality={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default HomeImage;
