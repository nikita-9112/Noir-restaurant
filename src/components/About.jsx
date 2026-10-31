import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import {  fadeLeft, fadeRight } from "../animations/variants";

const About = () => {
  return (
    <section id="about" className="bg-noir px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 h-full w-full border border-noir-gold/40" />

          <motion.img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=85"
            alt="Elegant fine dining restaurant interior"
            className="relative z-10 h-[420px] w-full object-cover md:h-[550px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />

          <div className="absolute -bottom-6 -right-4 z-20 bg-noir-gold px-7 py-5 text-noir">
            <p className="font-display text-3xl">Since 2015</p>
            <p className="mt-1 text-xs tracking-widest">
              CRAFTING MEMORIES
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:pl-10"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.4em] text-noir-gold">
            OUR STORY
          </p>

          <h2 className="font-display text-4xl leading-tight text-noir-cream md:text-6xl">
            More Than Just
            <br />
            <span className="italic text-noir-gold">
              A Dining Experience.
            </span>
          </h2>

          <p className="mt-8 text-sm leading-8 text-noir-muted">
            At NOIR, we believe that exceptional food brings people
            together. Every dish tells a story of passion, creativity,
            and carefully selected ingredients.
          </p>

          <p className="mt-5 text-sm leading-8 text-noir-muted">
            From intimate dinners to unforgettable celebrations,
            we create experiences that stay with you long after
            the last bite.
          </p>

          <motion.a
            href="#menu"
            whileHover={{ x: 8 }}
            className="mt-9 inline-flex items-center gap-4 border-b border-noir-gold pb-3 text-xs font-semibold tracking-[0.2em] text-noir-gold"
          >
            EXPLORE OUR MENU
            <ArrowRight size={17} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;