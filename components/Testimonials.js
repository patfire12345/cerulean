import Image from "next/image";
import TestimonialsCSS from "../styles/Testimonials.module.css";
import { data } from "./data";
import { useState, useEffect } from "react";

const Testimonials = ({ testimonialsCounter = 0, setTestimonialsCounter }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;

    if (seconds == 6) {
      setSeconds(0);
      setTestimonialsCounter(
        (testimonialsCounter + 1) % data.about.testimonialsText.length
      );
      clearInterval(interval);
    } else {
      console.log(seconds);
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, testimonialsCounter]);

  return (
    <div className={TestimonialsCSS.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/left_icon.png"
          width={12}
          height={22}
          onClick={() =>
            setTestimonialsCounter(
              (testimonialsCounter - 1 + data.about.testimonialsText.length) %
                data.about.testimonialsText.length
            )
          }
        />
        <div className={TestimonialsCSS.text}>
          <div>{data.about.testimonialsText[testimonialsCounter][0]}</div>
          <div className={TestimonialsCSS.name}>
            {data.about.testimonialsText[testimonialsCounter][1]}
          </div>
        </div>
        <Image
          src="/right_icon.png"
          width={12}
          height={22}
          onClick={() => setTestimonialsCounter((testimonialsCounter + 1) % 7)}
        />
      </div>
    </div>
  );
};

export default Testimonials;
