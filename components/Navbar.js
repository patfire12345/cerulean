import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarCSS from "../styles/Navbar.module.css";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import { useRouter } from "next/router";
import BlueButton from "./BlueButton";
import { useSession } from "next-auth/react";

const Navbar = ({ EN, setEN }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [data, setData] = useState(EN ? dataEN : dataVN);

  useEffect(() => {
    setData(EN ? dataEN : dataVN);
  }, [EN]);

  return (
    <div className={NavbarCSS.navbar}>
      <Link
        href={"/".concat(data.nav.links[0])}
        className={NavbarCSS.logocontainer}
      >
        <Image
          src="/logo.png"
          alt="site logo"
          width={63}
          height={63}
          quality={100}
        />
        <div className={NavbarCSS.logotext}> CERULEAN ORGANIZATION </div>
      </Link>
      <div className={NavbarCSS.linkcontainer}>
        {data.nav.titles.map((title, index) => {
          if (data.nav.links[index] == "contact") {
            return (
              <BlueButton buttonLink={"/".concat(data.nav.links[index])}>
                {title}
              </BlueButton>
            );
          } else if (data.nav.links[index] == "projects") {
            return (
              <Link
                href={"/".concat(data.nav.links[index])}
                className={`${
                  router.pathname === "/".concat(data.nav.links[index])
                    ? NavbarCSS.projectsactivelink
                    : NavbarCSS.projectslink
                }`}
              >
                {title}
              </Link>
            );
          } else if (session || !(data.nav.links[index] == "settings")) {
            return (
              <Link
                href={"/".concat(data.nav.links[index])}
                className={`${
                  router.pathname === "/".concat(data.nav.links[index])
                    ? NavbarCSS.activelink
                    : NavbarCSS.link
                }`}
              >
                {title}
              </Link>
            );
          }
        })}
      </div>
      <div className={NavbarCSS.languagecontainer}>
        <div
          className={NavbarCSS.languagebutton}
          onClick={() => {
            setEN(true);
          }}
        >
          <Image src={"/english.png"} width={16} height={8} />
          <div className={NavbarCSS.languagetext}>EN</div>
        </div>
        <div
          className={NavbarCSS.languagebutton}
          onClick={() => {
            setEN(false);
          }}
        >
          <Image src={"/vietnamese.png"} width={16} height={8} />
          <div className={NavbarCSS.languagetext}>VN</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
