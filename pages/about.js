import Head from "next/head";
import { data } from "../components/data.js";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About Us</h1>
        <p>{data.about.aboutUs}</p>
        {data.about.ourCoreValues.map((valueList) => {
          return (
            <div>
              <h2>{valueList[0]}</h2>
              <p>{valueList[1]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
