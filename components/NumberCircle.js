import NumberCircleCSS from "../styles/NumberCircle.module.css";

export default function NumberCircle({ number = 0 }) {
  return <div className={NumberCircleCSS.circle}>{number}</div>;
}
