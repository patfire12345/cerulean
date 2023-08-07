import TestimonialsCSS from "../styles/Testimonials.module.css";

const TestimonialsProgress = ({ testimonialList = [], activeIndex = -1 }) => {
  return (
    <div className={TestimonialsCSS.progressContainer}>
      {testimonialList.map((text, index) => {
        return activeIndex == index ? (
          <div className={TestimonialsCSS.activeProgressCircle} />
        ) : (
          <div className={TestimonialsCSS.progressCircle} />
        );
      })}
    </div>
  );
};

export default TestimonialsProgress;
