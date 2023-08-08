import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarCSS from "../styles/Navbar.module.css";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import { useRouter } from "next/router";
import BlueButton from "./BlueButton";

const Navbar = ({ EN, setEN }) => {
  const router = useRouter();
  const [data, setData] = useState(EN ? dataEN : dataVN);

  useEffect(() => {
    setData(EN ? dataEN : dataVN);
  }, [EN]);

  return (
    <div className={NavbarCSS.navbar}>
      <div className={NavbarCSS.logo}>
        <Image
          src="/logo.png"
          alt="site logo"
          width={63}
          height={63}
          quality={100}
        />
      </div>
      <div className={NavbarCSS.linkcontainer}>
        {data.nav.titles.map((title, index) => {
          if (data.nav.links[index] == "contact") {
            return (
              <BlueButton buttonLink={"/".concat(data.nav.links[index])}>
                {title}
              </BlueButton>
            );
          } else {
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
      <button
        onClick={() => {
          setEN(!EN);
        }}
      >
        Change Language
      </button>
    </div>
  );
};

export default Navbar;
