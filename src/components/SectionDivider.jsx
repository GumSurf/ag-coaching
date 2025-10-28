import { motion } from "framer-motion";

export default function SectionDivider({ color = "bg-orange-500", thickness = "h-px", width = "1%", className = "" }) {
  return (
    <motion.div
      className={`mx-auto ${thickness} ${color} ${className}`}
      style={{ width: width, maxWidth: "300px" }} // max-width limite la largeur
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
}
