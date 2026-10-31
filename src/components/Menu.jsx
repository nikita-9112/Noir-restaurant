
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Desserts",
  "Drinks",
];

const menuItems = [
  {
    id: 1,
    name: "Smoky Paneer Tikka",
    category: "Starters",
    description: "Marinated paneer grilled with aromatic Indian spices.",
    price: "₹329",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=85?auto=format",
  },
  {
    id: 2,
    name: "Crispy Veg Spring Rolls",
    category: "Starters",
    description: "Golden rolls filled with fresh vegetables and herbs.",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=85?auto=format",
  },
  {
    id: 3,
    name: "Creamy Truffle Pasta",
    category: "Main Course",
    description: "Handcrafted pasta tossed in a rich creamy sauce.",
    price: "₹449",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85?auto=format",
  },
  {
    id: 4,
    name: "Garden Fresh Pizza",
    category: "Main Course",
    description: "A delicious pizza topped with fresh vegetables.",
    price: "₹399",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&q=85?auto=format",
  },
  {
    id: 5,
    name: "Chocolate Decadence",
    category: "Desserts",
    description: "Rich chocolate dessert for a perfect ending.",
    price: "₹249",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=85?auto=format",
  },
  {
    id: 6,
    name: "Classic Cheesecake",
    category: "Desserts",
    description: "Smooth and creamy cheesecake with a delicate crust.",
    price: "₹279",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700&q=85?auto=format",
  },
  {
    id: 7,
    name: "Fresh Lime Cooler",
    category: "Drinks",
    description: "Refreshing lime drink with a hint of mint.",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700&q=85?auto=format",
  },
  {
    id: 8,
    name: "Berry Smoothie",
    category: "Drinks",
    description: "A refreshing blend of seasonal berries.",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700&q=85?auto=format",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="menu" className="bg-noir px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-5 text-xs tracking-[0.4em] text-noir-gold">
            EXPLORE OUR FLAVOURS
          </p>

          <h2 className="font-display text-4xl text-noir-cream md:text-6xl">
            The Art of
            <span className="italic text-noir-gold"> Our Menu</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-noir-muted">
            From delightful starters to indulgent desserts,
            discover something special for every occasion.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border px-5 py-3 text-xs tracking-widest transition duration-300 ${
                activeCategory === category
                  ? "border-noir-gold bg-noir-gold text-noir"
                  : "border-white/15 text-noir-muted hover:border-noir-gold hover:text-noir-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <motion.div
          layout
          className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden border border-white/10 bg-noir-card"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <p className="mb-3 text-[10px] tracking-[0.2em] text-noir-gold">
                    {item.category.toUpperCase()}
                  </p>

                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl text-noir-cream">
                      {item.name}
                    </h3>

                    <span className="shrink-0 text-sm text-noir-gold">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-6 text-noir-muted">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;
