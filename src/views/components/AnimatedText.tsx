import { motion } from "framer-motion";

const textVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1.4, delay: i * 0.2, ease: "easeOut" },
  }),
};

const AnimatedText = () => {
  const words = ["Analyser", "Estimer", "Générer"];

  return (
    <div className="col mb-10 w-full text-left">
      <p className="flex flex-col space-y-4">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`uppercase bold text-6xl ${
              index === 0 ? "self-start" : index === 1 ? "self-center" : "self-end"
            }`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedText;
