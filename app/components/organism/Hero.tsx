import HeroText from "../molecule/HeroText";
import HeroSwirl from "~/assets/heroSwirl";
import TwinkelOne from "~/assets/twinkel1";
import TwinkelTwo from "~/assets/twinkel2";
import TwinkelThree from "~/assets/twinkel3";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import Navbar from "../molecule/Navbar";
import { motion } from "motion/react"

export default function Hero() {
  return (
    <main className="flex flex-col justify-center">
      <div>
        <Navbar />
      </div>
      <div className="flex w-full justify-between items-center">
        {/* Floating Swirl */}
        <motion.div
          animate={{ y: [20, -20, 20], x: [0, -5, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <HeroSwirl />
        </motion.div>
        <div className="flex flex-col gap-16 items-center">
          <HeroText />
          <p>We cover all kinds of categories and a weekly special guest.</p>
          <NavLink to="/analytics">
            <Button className="px-8 py-5 hover:cursor-pointer shadow-(--shadow-no-blur)">
              Analyze
            </Button>
          </NavLink>
        </div>

        {/* Twinkels Floating Group */}
        <div className="w-2xs">
          {/* Twinkel One */}
          <motion.div
            animate={{
              y: [30, -20, 20],
              opacity: [0.8, 1, 0.85] // twinkle
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <TwinkelOne />
          </motion.div>

          <div className="flex">
            {/* Twinkel Three */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 8, 0],
                opacity: [0.7, 1, 0.75] // twinkle
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <TwinkelThree />
            </motion.div>

            {/* Twinkel Two */}
            <motion.div
              animate={{
                y: [10, -10, 0],
                opacity: [0.85, 1, 0.8] // twinkle
              }}
              transition={{
                duration: 6.5, // slightly different for desync
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <TwinkelTwo />
            </motion.div>
          </div>
        </div>

      </div>
    </main>
  );
}
