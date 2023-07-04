import Link from "next/link";
import Image from "next/image";
import NavbarCSS from "../styles/Navbar.module.css";
import { data } from "../components/data";

const Navbar = () => {
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
          return (
            <Link
              href={"/".concat(data.nav.links[index])}
              className={NavbarCSS.link}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
