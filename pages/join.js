import Head from "next/head";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import JoinCSS from "../styles/Join.module.css";
import HomeImage from "../components/HomeImage";
import Button from "../components/Button";

const Join = ({ EN }) => {
  const data = EN ? dataEN : dataVN;
  return (
    <>
      <Head>
        <title>Cerulean | Join Us</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <div>
        <div className={JoinCSS.titlecontainer}>
          <HomeImage EN={EN} />
        </div>
        <div className={JoinCSS.descriptioncontainer}>
          <div className={JoinCSS.squarecontainer}>
            <div className={JoinCSS.toprectangle}>
              <div className={JoinCSS.bottomrectangle} />
            </div>
          </div>
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
            <Button buttonCSS={JoinCSS.button} buttonLink="">
              {data.join.button}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
