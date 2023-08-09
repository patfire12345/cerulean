import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { dataEN } from "../data/dataEN.js";
import AboutCSS from "../styles/About.module.css";
import Testimonials from "../components/Testimonials.js";
import TestimonialsProgress from "../components/TestimonialsProgress.js";

const About = () => {
  const [testimonialsCounter, setTestimonialsCounter] = useState(0);
  const data = dataEN;
  return (
    <>
      <Head>
        <title>Cerulean | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <div>
          <Image
            src="/about_background.png"
            alt="about"
            fill={true}
            quality={100}
            className={AboutCSS.aboutbackground}
          />
          <div className={AboutCSS.title}>{data.about.title}</div>
          <div className={AboutCSS.description}>{data.about.aboutUs}</div>
        </div>
        <div className={AboutCSS.valuebox}>
          <div className={AboutCSS.subtitle}>{data.about.subtitles.core}</div>
          <div className={AboutCSS.valuecontainer}>
            <div className={AboutCSS.valuegrid}>
              {data.about.ourCoreValues.map((valueList) => {
                return <div className={AboutCSS.value}>{valueList[0]}</div>;
              })}
              {data.about.ourCoreValues.map((valueList) => {
                return (
                  <div className={AboutCSS.valuedescription}>
                    {valueList[1]}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={AboutCSS.storycontainer}>
          <div>
            <Image
              src="/about_img.jpg"
              alt="story"
              height={410}
              width={342}
              quality={100}
              className={AboutCSS.storyimage}
            />
          </div>
          <div>
            <Image
              src="/about_sticker.png"
              alt="story"
              height={50}
              width={25}
              quality={100}
              className={AboutCSS.storysticker1}
            />
          </div>
          <div>
            <Image
              src="/about_sticker.png"
              alt="story"
              height={50}
              width={25}
              quality={100}
              className={AboutCSS.storysticker2}
            />
          </div>
          <div>
            <div className={AboutCSS.storysubtitle}>
              {data.about.subtitles.story}
            </div>
            <div className={AboutCSS.storydescription}>
              {data.about.storyDescription}
            </div>
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
