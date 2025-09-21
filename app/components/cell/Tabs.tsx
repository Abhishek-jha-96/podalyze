import { motion } from "motion/react";
import { NavLink } from "react-router";

export default function Tabs() {
  return (
    <nav className="flex w-lg justify-around pr-16 text-lg font-mono font-medium">
      <motion.div
        whileHover={{ scale: 1.2, color: "var(--color-primary-text)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <NavLink to="/" end className="hover:text-primary-text">
          Home
        </NavLink>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.2, color: "var(--color-primary-text)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <NavLink to="/analytics" end>
          Analytics
        </NavLink>
      </motion.div>
    </nav>
  );
}
