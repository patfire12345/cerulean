import Button from "./Button";
import ButtonCSS from "../styles/Button.module.css";

const BlueButton = ({ children = "Button", buttonLink = "" }) => {
  return (
    <Button buttonLink={buttonLink} buttonCSS={ButtonCSS.blue}>
      {children}
    </Button>
  );
};

export default BlueButton;
