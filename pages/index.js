import Head from "next/head";
import HomeImage from "../components/HomeImage";
import HomeCSS from "../styles/Home.module.css";
import { data } from "../components/data";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={HomeCSS.container}>
      <Head>
        <title>Cerulean | Home</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <HomeImage imagetextCSS={HomeCSS.imagetext} imageCSS={HomeCSS.image} />
      <div>
        <div className={HomeCSS.title}>{data.home.title}</div>
        <div className={HomeCSS.text}>{data.home.text}</div>
        <div className={HomeCSS.buttoncontainer}>
          <Button buttonLink={data.home.link} buttonCSS={HomeCSS.button}>
            {data.home.button}
          </Button>
        </div>
      </div>
    </div>
  );
}
