
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Creamy Truffle Pasta",
    category: "CHEF'S SPECIAL",
    description:
      "Handcrafted pasta tossed in a rich, creamy truffle sauce.",
    price: "₹449",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85",
  },
  {
    id: 2,
    name: "Smoky Paneer Tikka",
    category: "SIGNATURE STARTER",
    description:
      "Tender paneer infused with aromatic spices and grilled to perfection.",
    price: "₹329",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=900&q=85",
  },
  {
    id: 3,
    name: "Chocolate Decadence",
    category: "DESSERT",
    description:
      "A delicious chocolate dessert with a rich, indulgent centre.",
    price: "₹249",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=85",
  },
];

const SignatureDishes = ({ onViewMenu }) => {
  return (
    <section className="bg-[#151411] px-6 py-24 md:py-32" id="signature">

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.4em] text-noir-gold">
            A TASTE OF NOIR
          </p>

          <h2 className="font-display text-4xl text-noir-cream md:text-6xl">
            Our Signature
            <span className="italic text-noir-gold"> Dishes</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-noir-muted">
            Thoughtfully prepared, beautifully presented and
            made to turn every meal into a memorable experience.
          </p>
        </motion.div>

        {/* Dish Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {dishes.map((dish, index) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group overflow-hidden border border-white/10 bg-noir-card"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />

                <span className="absolute left-5 top-5 bg-black/70 px-4 py-2 text-[10px] tracking-[0.2em] text-noir-gold backdrop-blur-sm">
                  {dish.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">

                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-noir-cream">
                    {dish.name}
                  </h3>

                  <span className="shrink-0 text-lg text-noir-gold">
                    {dish.price}
                  </span>
                </div>

                <p className="text-sm leading-7 text-noir-muted">
                  {dish.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[10px] tracking-[0.25em] text-noir-cream/50">
                    MADE WITH PASSION
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-noir-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* Explore Menu */}
        <div className="mt-14 text-center">
        <button
          onClick={onViewMenu}
          className="inline-flex items-center gap-3 border border-noir-gold px-8 py-4 text-xs tracking-[0.2em] text-noir-gold transition hover:bg-noir-gold hover:text-noir"
        >
          VIEW FULL MENU
          <ArrowUpRight size={16} />
        </button>
        </div>

      </div>
    </section>
  );
};

export default SignatureDishes;
