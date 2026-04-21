import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animate } from "framer-motion";
import "../../Styles/Foundation.css";

const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate: (latest) => setValue(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{value}{suffix}</span>;
};

const Foundation = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="foundation p-3 p-sm-5 row justify-content-center gx-0"
    >
      <div className="col-sm-6 col-lg-3 text-center">
        <p className="fo-title">OUR EXPERIENCE</p>
        <p className="fo-subtitle">
          {inView && <Counter to={28} />} YEARS
        </p>
      </div>

      <div className="col-sm-6 col-lg-3 text-center">
        <p className="fo-title">STUDENTS</p>
        <p className="fo-subtitle">
          {inView && <Counter to={1700} suffix="+" />}
        </p>
      </div>

      <div className="col-sm-6 col-lg-3 text-center">
        <p className="fo-title">TEACHERS</p>
        <p className="fo-subtitle">
          {inView && <Counter to={80} suffix="+" />}
        </p>
      </div>

      <div className="col-sm-6 col-lg-3 text-center">
        <p className="fo-title">RESULT</p>
        <p className="fo-subtitle">
          {inView && <Counter to={100} suffix="%" />}
        </p>
      </div>
    </section>
  );
};

export default Foundation;