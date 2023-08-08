import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import AboutCSS from "../styles/About.module.css";
import Testimonials from "../components/Testimonials.js";
import TestimonialsProgress from "../components/TestimonialsProgress.js";

const About = ({ EN }) => {
  const [testimonialsCounter, setTestimonialsCounter] = useState(0);
  const data = EN ? dataEN : dataVN;
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
            <div className={AboutCSS.storysubtitle}>
              {data.about.subtitles.story}
            </div>
            <div className={AboutCSS.storydescription} />
          </div>
        </div>
        <div className={AboutCSS.testimonialscontainer}>
          <div className={AboutCSS.subtitle}>
            {data.about.subtitles.testimonials}
          </div>
          <Testimonials
            testimonialsCounter={testimonialsCounter}
            setTestimonialsCounter={setTestimonialsCounter}
          />
          <TestimonialsProgress
            testimonialList={data.about.testimonialsText}
            activeIndex={testimonialsCounter}
          />
        </div>
      </div>
    </>
  );
};

export default About;
