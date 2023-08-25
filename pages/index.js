import Head from "next/head";
import HomeImage from "../components/HomeImage";
import HomeCSS from "../styles/Home.module.css";

export default function Home({ EN }) {
  return (
    <div className={HomeCSS.container}>
      <Head>
        <title>Cerulean | Home</title>
        <meta name="keywords" content="cerulean" />
        <link rel="icon" href="/icon.png" type="image" />
      </Head>
      <HomeImage EN={EN} />
    </div>
  );
}
