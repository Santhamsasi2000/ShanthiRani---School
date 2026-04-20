import { motion } from "framer-motion";
import CountUp from "react-countup";

const Box = ({ title, end, suffix }) => {
  return (
    <motion.div
      className="col-sm-6 col-lg-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // trigger only once
      transition={{ duration: 0.6 }}
    >
      <p className="fo-title">{title}</p>
      <p className="fo-subtitle">
        <CountUp end={end} duration={2} /> {suffix}
      </p>
    </motion.div>
  );
};

const Foundation = () => {
  return (
    <section className="foundation p-3 p-sm-5 row gx-0">
      <Box title="OUR EXPERIENCE" end={28} suffix="YEARS" />
      <Box title="STUDENTS" end={1700} suffix="+" />
      <Box title="TEACHERS" end={80} suffix="+" />
      <Box title="RESULT" end={100} suffix="%" />
    </section>
  );
};

export default Foundation;