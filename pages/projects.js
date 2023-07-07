import Head from "next/head";
import ProjectsCSS from "../styles/Projects.module.css";
import { data } from "../components/data";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Cerulean | Projects</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <div>
        <div className={ProjectsCSS.title}>{data.projects.title}</div>
        <div className={ProjectsCSS.tutorcontainer}>
          <div
            style={{
              backgroundColor: "#6792BA",
              borderRadius: "0 18px 0 0",
              width: "368px",
              height: "555px",
              marginRight: "200px",
            }}
          />
          <div className={ProjectsCSS.subtitle}>{data.projects.tutor}</div>
        </div>
        <div className={ProjectsCSS.reveriecontainer}>
          <div className={ProjectsCSS.reveriedescriptioncontainer}>
            <div className={ProjectsCSS.reverietitle}>
              {data.projects.reverie.title}
            </div>
            <div className={ProjectsCSS.reverietext}>
              {data.projects.reverie.text}
            </div>
          </div>
          <div className={ProjectsCSS.reverieportrait}>
            <Image
              src={data.projects.reverie.image}
              width={292.5}
              height={217.75}
              quality={100}
              style={{
                borderRadius: "18px",
              }}
            />
          </div>
        </div>
        <div className={ProjectsCSS.bonfirecontainer}>
          <div className={ProjectsCSS.bonfireportrait}>
            <Image
              src={data.projects.bonfire.image}
              width={320}
              height={480}
              quality={100}
              style={{
                borderRadius: "0 0 18px 0",
              }}
            />
          </div>
          <div className={ProjectsCSS.subtitle}>
            {data.projects.bonfire.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
