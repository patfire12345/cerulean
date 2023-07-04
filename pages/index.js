import Head from "next/head";
import HomeImage from "../components/HomeImage";
import HomeCSS from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={HomeCSS.container}>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <HomeImage imagetextCSS={HomeCSS.imagetext} imageCSS={HomeCSS.image} />
      <div>
        <div className={HomeCSS.title}>Cerulean Organization</div>
        <div>
          Cerulean thrives to build a sustainable future for all children and
          young people. The organization works towards a world where every child
          is heard, treated with respect, and loved.{" "}
        </div>
        <button>CONTACT</button>
      </div>
    </div>
  );
}
