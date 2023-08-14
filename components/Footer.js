import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import FooterCSS from "../styles/Footer.module.css";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ EN }) => {
  const { data: session } = useSession();
  const data = EN ? dataEN : dataVN;

  useEffect(() => {
    if (session && session.user.email !== process.env.VERIFIED_EMAIL) {
      signOut();
    }
  }, [session]);

  if (session) {
    return (
      <div className={FooterCSS.container}>
        <div className={FooterCSS.footercontainer}>
          <div className={FooterCSS.explorecontainer}>
            <div className={FooterCSS.footertitle}>
              {data.footer.explore[0]}
            </div>
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
            <div className={FooterCSS.footertitle}>{data.footer.portal[0]}</div>
            <div className={FooterCSS.portalitem} onClick={() => signOut()}>
              {data.footer.portal[2]}
            </div>
            <div>Hello, {session.user.name}</div>
            <div>Your name is {session.user.email}</div>
          </div>
          <div className={FooterCSS.newslettercontainer}>
            <div className={FooterCSS.footertitle}>
              {data.footer.newsletter[0]}
            </div>
            <div className={FooterCSS.newsletteritem}>
              {data.footer.newsletter[1]}
            </div>
            <div className={FooterCSS.newsletterform}>
              <input
                className={FooterCSS.newsletterinput}
                placeholder="Email address"
              />
              <div className={FooterCSS.newsletterbutton}>Subscribe</div>
            </div>
          </div>
          <div className={FooterCSS.contactcontainer}>
            <div className={FooterCSS.footertitle}>
              {data.footer.contact[0]}
            </div>
            <Link href="/contact" className={FooterCSS.contactitem}>
              {data.footer.contact[1]}
            </Link>
          </div>
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
            {data.footer.copyright[0]}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={FooterCSS.container}>
      <div className={FooterCSS.footercontainer}>
        <div className={FooterCSS.explorecontainer}>
          <div className={FooterCSS.footertitle}>{data.footer.explore[0]}</div>
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
          <div className={FooterCSS.footertitle}>{data.footer.portal[0]}</div>
          <div className={FooterCSS.portalitem} onClick={() => signIn()}>
            {data.footer.portal[1]}
          </div>
        </div>
        <div className={FooterCSS.newslettercontainer}>
          <div className={FooterCSS.footertitle}>
            {data.footer.newsletter[0]}
          </div>
          <div className={FooterCSS.newsletteritem}>
            {data.footer.newsletter[1]}
          </div>
          <div className={FooterCSS.newsletterform}>
            <input
              className={FooterCSS.newsletterinput}
              placeholder="Email address"
            />
            <div className={FooterCSS.newsletterbutton}>Subscribe</div>
          </div>
        </div>
        <div className={FooterCSS.contactcontainer}>
          <div className={FooterCSS.footertitle}>{data.footer.contact[0]}</div>
          <Link href="/contact" className={FooterCSS.contactitem}>
            {data.footer.contact[1]}
          </Link>
        </div>
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
          {data.footer.copyright[0]}
        </div>
      </div>
    </div>
  );
};

export default Footer;
