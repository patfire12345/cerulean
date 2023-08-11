import FooterCSS from "../styles/Footer.module.css";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ EN }) => {
  const data = EN ? dataEN : dataVN;
  return (
    <div className={FooterCSS.container}>
      <div className={FooterCSS.topfootercontainer}>
        <div className={FooterCSS.explorecontainer}>
          <div className={FooterCSS.footertitle}>EXPLORE</div>
          <div className={FooterCSS.exploreitemscontainer}>
            {data.footer.titles.map((title, index) => {
              if (data.footer.links[index] != "contact") {
                return (
                  <Link
                    href={"/".concat(data.footer.links[index])}
                    className={FooterCSS.exploreitem}
                  >
                    {title}
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className={FooterCSS.portalcontainer}>
          <div className={FooterCSS.footertitle}>PORTAL</div>
          <Link href="/" className={FooterCSS.portalitem}>
            LOGIN
          </Link>
        </div>
        <div className={FooterCSS.newslettercontainer}>
          <div className={FooterCSS.footertitle}>NEWSLETTER</div>
          <div className={FooterCSS.newsletteritem}>
            Want to know what we’re up to? Sign up for our email list here!
          </div>
          <div className={FooterCSS.newsletteritem}>Coming soon!</div>
        </div>
      </div>
      <div className={FooterCSS.middlefootercontainer}>
        <div className={FooterCSS.footertitle}>LET'S KEEP IN TOUCH!</div>
        <Link href="/contact" className={FooterCSS.contactitem}>
          CONTACT
        </Link>
      </div>
      <div className={FooterCSS.bottomfootercontainer}>
        <div className={FooterCSS.iconscontainer}>
          {data.contact.links.map((link, index) => {
            return (
              <div className={FooterCSS.icon}>
                <Link href={link}>
                  <Image
                    src={data.footer.icons[index]}
                    width={41}
                    height={41}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className={FooterCSS.copyrighttext}>
          COPYRIGHT © Cerulean Organization NPO 2023. ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
