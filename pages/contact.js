import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { data } from "../components/data";
import ContactCSS from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Cerulean | Contact Us</title>
        <meta name="keywords" content="cerulean" />
      </Head>
      <div className={ContactCSS.container}>
        <div className={ContactCSS.infotext}>{data.contact.infotext}</div>
        <div className={ContactCSS.socialtext}>{data.contact.socialtext}</div>
        <div className={ContactCSS.iconcontainer}>
          {data.contact.links.map((link, index) => {
            return (
              <Link href={link} className={ContactCSS.icon}>
                <Image src={data.contact.icons[index]} width={29} height={29} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
