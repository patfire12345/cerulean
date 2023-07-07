import Head from "next/head";
import JoinCSS from "../styles/Join.module.css";
import Image from "next/image";

const Join = () => {
  return (
    <>
      <Head>
        <title>Cerulean | Join Us</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <div>
        <div className={JoinCSS.titlecontainer}>
          <div className={JoinCSS.title}>
            Join Us
            <Image
              src="/join_img.jpg"
              width={1375.5}
              height={323.25}
              quality={100}
              className={JoinCSS.image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
