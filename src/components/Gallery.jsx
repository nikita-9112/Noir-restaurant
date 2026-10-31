
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Maximize2,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "The Perfect Ambience",
    category: "INTERIORS",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85",
  },
  {
    id: 2,
    title: "Crafted to Perfection",
    category: "FOOD",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85",
  },
  {
    id: 3,
    title: "An Evening at NOIR",
    category: "EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=85",
  },
  {
    id: 4,
    title: "A Taste of Elegance",
    category: "FOOD",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
  },
  {
    id: 5,
    title: "Moments Worth Sharing",
    category: "INTERIORS",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=85",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="gallery"
      className="bg-[#151411] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-xs tracking-[0.4em] text-noir-gold">
            A GLIMPSE INTO NOIR
          </p>

          <h2 className="font-display text-4xl text-noir-cream md:text-6xl">
            Moments & 
            <span className="italic text-noir-gold"> Memories</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-noir-muted">
            Every corner tells a story. Explore the atmosphere,
            flavours and experiences that make NOIR special.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[250px] lg:grid-cols-3">

          {galleryImages.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative overflow-hidden text-left ${
                index === 0
                  ? "sm:row-span-2"
                  : index === 3
                    ? "lg:col-span-2"
                    : ""
              }`}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 opacity-80 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="mb-2 text-[10px] tracking-[0.3em] text-noir-gold">
                    {item.category}
                  </p>

                  <h3 className="font-display text-xl text-white md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <Maximize2
                  size={20}
                  className="text-noir-gold opacity-0 transition group-hover:opacity-100"
                />
              </div>
            </motion.button>
          ))}

        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-6 top-6 z-20 text-white hover:text-noir-gold"
              aria-label="Close gallery"
            >
              <X size={30} />
            </button>

            <button
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-noir-gold hover:text-noir md:left-8"
              aria-label="Previous image"
            >
              <ArrowLeft size={22} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex max-h-[85vh] max-w-5xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].image}
                  alt={galleryImages[selectedImage].title}
                  className="max-h-[75vh] max-w-full object-contain"
                />

                <p className="mt-5 font-display text-xl text-noir-cream">
                  {galleryImages[selectedImage].title}
                </p>

                <p className="mt-2 text-xs tracking-widest text-noir-gold">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-20 rounded-full bg-white/10 p-3 text-white hover:bg-noir-gold hover:text-noir md:right-8"
              aria-label="Next image"
            >
              <ArrowRight size={22} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
