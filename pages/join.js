import Head from "next/head";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import JoinCSS from "../styles/Join.module.css";
import Image from "next/image";
import Button from "../components/Button";

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
          src="/join_bg.jpg"
          fill={true}
          quality={100}
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <Image
          src="/join_animation_img.png"
          width={821}
          height={566}
          quality={100}
          style={{ objectFit: "cover", zIndex: -1, position: "absolute" }}
        />
        <div className={JoinCSS.titleoutercontainer}>
          <div className={JoinCSS.titlecontainer}>
            <div className={JoinCSS.title}>JOIN US!</div>
            <div className={JoinCSS.titletext}>
              Exciting news! We are excited to announce that our recruitment
              season is now open! If you're looking to contribute to a dynamic,
              multicultural, and professional environment, we invite you to
              apply and join our cause.{" "}
            </div>
            <div className={JoinCSS.buttoncontainer}>
              <a href={data.contact.links[2]} className={JoinCSS.button}>
                Apply
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
