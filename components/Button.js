import Link from "next/link";

const Button = ({ children, buttonLink, buttonCSS }) => {
  return (
    <Link href={buttonLink} className={buttonCSS}>
      {children}
    </Link>
  );
};

export default Button;
