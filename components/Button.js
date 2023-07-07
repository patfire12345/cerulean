import Link from "next/link";

const Button = ({ children = "Button", buttonLink = "", buttonCSS }) => {
  return (
    <Link href={buttonLink} className={buttonCSS}>
      {children}
    </Link>
  );
};

export default Button;
