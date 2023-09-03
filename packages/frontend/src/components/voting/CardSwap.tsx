import { motion, AnimatePresence } from "framer-motion";

type Props = {
  url: string;
};

const CardSwap = ({ url }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute rounded-lg bg-gray-200/20"
        style={{ top: "-12px", left: "42px", width: "230px", height: "230px", zIndex: 0 }}
      ></motion.div>
      <AnimatePresence>
        <motion.div
          key={url}
          initial={{ opacity: 0, scale: 0.5, zIndex: 1 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ x: "100%", rotate: 20, zIndex: 2 }}
          transition={{ duration: 0.5 }}
          className="absolute rounded-lg"
          style={{ width: "313px", height: "313px", zIndex: 1 }}
        >
          <img src={url} alt={`Image-${url}`} className="object-cover w-full h-full rounded-lg" />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CardSwap;
