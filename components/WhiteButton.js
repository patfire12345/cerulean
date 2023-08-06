import Button from "./Button";
import ButtonCSS from "../styles/Button.module.css";

const WhiteButton = ({ children = "Button", buttonLink = "" }) => {
  return (
    <Button buttonLink={buttonLink} buttonCSS={ButtonCSS.white}>
      {children}
    </Button>
  );
};

export default WhiteButton;
