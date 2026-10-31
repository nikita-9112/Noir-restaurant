import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-noir"
    >
      {/* Optimized Hero Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=75"
        srcSet="
          https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=75 800w,
          https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=75 1200w,
          https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=75 1600w
        "
        sizes="100vw"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: shouldReduceMotion ? 1 : 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 2.5,
          ease: "easeOut",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-black/30" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.2,
              delayChildren: shouldReduceMotion ? 0 : 0.4,
            },
          },
        }}
      >
        {/* Small Label */}
        <motion.div variants={reveal}>
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-noir-gold" />
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-noir-gold">
              An unforgettable dining experience
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <h1
          className="max-w-4xl font-display text-5xl leading-[1.15] text-noir-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Where Every
          <br />
          Flavour Tells a
          <br />
          <span className="italic text-noir-gold">
            Beautiful Story.
          </span>
        </h1>

        {/* Description */}
        <motion.p
          variants={reveal}
          className="mt-8 max-w-xl text-sm leading-8 text-noir-cream/75 md:text-base"
        >
          Experience the art of fine dining with thoughtfully
          crafted dishes, exceptional flavours and moments
          worth remembering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={reveal}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <motion.a
            href="#signature"
            whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="group flex items-center gap-4 bg-noir-gold px-7 py-4 text-xs font-semibold tracking-widest text-noir transition-colors hover:bg-noir-cream"
          >
            EXPLORE MENU
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          <motion.a
            href="#about"
            whileHover={shouldReduceMotion ? {} : { x: 5 }}
            className="flex items-center gap-3 text-xs font-semibold tracking-widest text-noir-cream transition-colors hover:text-noir-gold"
          >
            DISCOVER OUR STORY
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to discover our story"
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-noir-cream/70"
        animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-[10px] tracking-[0.35em]">
          SCROLL TO EXPLORE
        </span>
        <ArrowDown size={18} className="text-noir-gold" />
      </motion.a>

      {/* Decorative Side Text */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] tracking-[0.4em] text-noir-cream/40 lg:block">
        CRAFTED WITH PASSION
      </div>
    </section>
  );
};

export default Hero;