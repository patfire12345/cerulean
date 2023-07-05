import Head from "next/head";
import Image from "next/image";
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
        <div className={AboutCSS.title}>{data.about.title}</div>
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
        <div className={AboutCSS.storycontainer}>
          <div>
            <Image
              src="/about_img.jpg"
              alt="story"
              height={405}
              width={570}
              quality={100}
              className={AboutCSS.storyimage}
            />
          </div>
          <div>
            <div className={AboutCSS.subtitle}>
              {data.about.subtitles.story}
            </div>
            <div className={AboutCSS.storydescription} />
          </div>
        </div>
        <div className={AboutCSS.subtitle}>{data.about.subtitles.team}</div>
      </div>
    </>
  );
};

export default About;
