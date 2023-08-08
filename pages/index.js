import Head from "next/head";
import HomeImage from "../components/HomeImage";
import HomeCSS from "../styles/Home.module.css";
import { dataEN } from "../data/dataEN";
import WhiteButton from "../components/WhiteButton";

export default function Home() {
  return (
    <div className={HomeCSS.container}>
      <Head>
        <title>Cerulean | Home</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <HomeImage />
    </div>
  );
}
