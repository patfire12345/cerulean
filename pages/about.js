import Head from "next/head";
import { data } from "../components/data.js";
import AboutCSS from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Cerulean | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <div className={AboutCSS.title}>About Us</div>
        <div className={AboutCSS.description}>{data.about.aboutUs}</div>
        <div className={AboutCSS.subtitle}>{data.about.subtitles.core}</div>
        <div className={AboutCSS.valuecontainer}>
          <div className={AboutCSS.valuegrid}>
            {data.about.ourCoreValues.map((valueList) => {
              return <div className={AboutCSS.value}>{valueList[0]}</div>;
            })}
            {data.about.ourCoreValues.map((valueList) => {
              return (
                <div className={AboutCSS.valuedescription}>{valueList[1]}</div>
              );
            })}
          </div>
        </div>
        <div className={AboutCSS.subtitle}>{data.about.subtitles.story}</div>
        <div className={AboutCSS.subtitle}>{data.about.subtitles.team}</div>
      </div>
    </>
  );
};

export default About;
