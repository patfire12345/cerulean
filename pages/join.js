import Head from "next/head";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import JoinCSS from "../styles/Join.module.css";
import Image from "next/image";

const Join = ({ EN }) => {
  const data = EN ? dataEN : dataVN;
  return (
    <>
      <Head>
        <title>Cerulean | Join Us</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <div className={JoinCSS.container}>
        <Image
          src={data.join.image[0]}
          fill={true}
          quality={100}
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <Image
          src={data.join.image[1]}
          width={821}
          height={566}
          quality={100}
          style={{ objectFit: "cover", zIndex: -1, position: "absolute" }}
        />
        <div className={JoinCSS.titleoutercontainer}>
          <div className={JoinCSS.titlecontainer}>
            <div className={JoinCSS.title}>{data.join.title}</div>
            <div className={JoinCSS.titletext}>{data.join.text}</div>
            <div className={JoinCSS.buttoncontainer}>
              <a href={data.contact.links[2]} className={JoinCSS.button}>
                {data.join.button}
              </a>
            </div>
          </div>
        </div>
        <div className={JoinCSS.descriptioncontainer}>
          <div className={JoinCSS.textcontainer}>
            <div>{data.join.description.start}</div>
            <br />
            <ul className={JoinCSS.listtext}>
              {data.join.description.middle.map((text) => {
                return <li>{text}</li>;
              })}
            </ul>
            <br />
            <div>{data.join.description.end}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
