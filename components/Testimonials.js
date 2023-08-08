import { useState, useEffect } from "react";
import Image from "next/image";
import TestimonialsCSS from "../styles/Testimonials.module.css";
import { dataEN } from "../data/dataEN";
import { dataVN } from "../data/dataVN";
import { motion } from "framer-motion";

const Testimonials = ({
  testimonialsCounter = 0,
  setTestimonialsCounter,
  EN,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [visible, setVisible] = useState(true);

  const show = {
    opacity: 1,
  };

  const hide = {
    opacity: 0,
  };

  const data = EN ? dataEN : dataVN;

  useEffect(() => {
    let interval = null;

    setVisible(true);

    if (seconds == 6) {
      setVisible(false);
      setTimeout(() => {
        setSeconds(0);
        setTestimonialsCounter(
          (testimonialsCounter + 1) % data.about.testimonialsText.length
        );
        clearInterval(interval);
      }, 500);
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
          onClick={() => {
            setTestimonialsCounter(
              (testimonialsCounter - 1 + data.about.testimonialsText.length) %
                data.about.testimonialsText.length
            );
          }}
        />
        <motion.div
          className={TestimonialsCSS.text}
          animate={visible ? show : hide}
        >
          <div>{data.about.testimonialsText[testimonialsCounter][0]}</div>
          <div className={TestimonialsCSS.name}>
            {data.about.testimonialsText[testimonialsCounter][1]}
          </div>
        </motion.div>
        <Image
          src="/right_icon.png"
          width={12}
          height={22}
          onClick={() =>
            setTestimonialsCounter(
              (testimonialsCounter + 1) % data.about.testimonialsText.length
            )
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
