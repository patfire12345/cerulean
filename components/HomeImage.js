import Image from "next/image";

const HomeImage = ({ imagetextCSS, imageCSS, image, imagetext, alt = "" }) => {
  return (
    <div className={imageCSS}>
      <div className={imagetextCSS}>{imagetext}</div>
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
