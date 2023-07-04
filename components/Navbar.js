import Link from "next/link";
import Image from "next/image";
import NavbarCSS from "../styles/Navbar.module.css";
import { data } from "../pages/data";

const Navbar = () => {
  return (
    <nav className={NavbarCSS.nav}>
      <div className={NavbarCSS.logo}>
        <Image
          src="/logo.png"
          alt="site logo"
          width={63}
          height={63}
          quality={100}
        />
      </div>
      {data.nav.titles.map((title, index) => {
        return (
          <Link href={"/".concat(data.nav.links[index])}>
            <a>{title}</a>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
