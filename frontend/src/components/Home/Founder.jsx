import { motion } from "framer-motion";
import React from "react";
import founder from "../../assets/founder.png";

const Founder = () => {
const animation  = {
    initial: {x: "-100%", opacity: 0},
    whileInView: {x: 0, opacity: 1}
}

  return (
    <section className="founder">
      <motion.div {...animation}>
        <img src={founder} alt="Founder" height={200} />
        <h3>Nishi Sharma</h3>
        <p>
          Hey Everyone, I am Nishi Sharma, the founder of
          <br/> 
          <span>THE CAKE SHOP</span> 
          <br />
          Our aim is to create the most tastiest cakes on the planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
