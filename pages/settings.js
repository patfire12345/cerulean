import Head from "next/head";
import Image from "next/image";
import SettingsCSS from "../styles/Settings.module.css";
import Link from "next/link";
import NumberCircle from "../components/NumberCircle";

export default function Settings({ EN }) {
  const masterList = [
    "Change Logo",
    "Add a new Project article",
    "Update the recruitment status on Join Us",
    "Request a new feature",
  ];
  return (
    <div className={SettingsCSS.container}>
      <Head>
        <title>Cerulean | Settings</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <Image
        src="/settings_img.png"
        alt="settings"
        fill={true}
        quality={100}
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className={SettingsCSS.backgroundcolor}>
        <div className={SettingsCSS.mastercontainer}>
          {masterList.map((text, index) => {
            return (
              <Link href="/" className={SettingsCSS.mastercontaineritem}>
                <NumberCircle number={index + 1} />
                <div className={SettingsCSS.masteritemtext}>{text}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
