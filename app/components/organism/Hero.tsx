import HeroText from "../molecule/HeroText";
import HeroSwirl from "~/assets/heroSwirl";
import TwinkelOne from "~/assets/twinkel1";
import TwinkelTwo from "~/assets/twinkel2";
import TwinkelThree from "~/assets/twinkel3";
import { Button } from "../ui/button";
import { NavLink } from "react-router";
import Navbar from "../molecule/Navbar";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <main className="flex h-dvh w-full flex-col overflow-hidden">
      <div className="shrink-0 px-6 pt-4">
        <Navbar />
      </div>

      <section className="flex min-h-0 flex-1 w-full items-center justify-between gap-6 pb-6 lg:gap-8 lg:pb-8">
        <motion.div
          className="shrink-0"
          animate={{ y: [-14, 14], rotate: [-2, 2] }}
          transition={{
            y: {
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 0.5,
            },
          }}
        >
          <HeroSwirl />
        </motion.div>

        <div className="flex flex-col items-center gap-8 text-center">
          <HeroText />
          <p>We cover all kinds of categories and a weekly special guest.</p>
          <NavLink to="/analytics">
            <Button className="px-8 py-5 hover:cursor-pointer shadow-(--shadow-no-blur)">
              Analyze
            </Button>
          </NavLink>
        </div>

        <div className="relative flex w-2xs shrink-0 flex-col items-end gap-4">
          <motion.div
            animate={{
              y: [-10, 10],
              opacity: [0.65, 1],
              scale: [0.97, 1.03],
            }}
            transition={{
              y: {
                duration: 5.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              opacity: {
                duration: 2.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
              scale: {
                duration: 3.2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
          >
            <TwinkelOne />
          </motion.div>

          <div className="flex">
            <motion.div
              animate={{
                y: [-8, 8],
                opacity: [0.7, 1],
                scale: [0.98, 1.02],
              }}
              transition={{
                y: {
                  duration: 4.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.3,
                },
                opacity: {
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.4,
                },
                scale: {
                  duration: 2.6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              <TwinkelThree />
            </motion.div>

            <motion.div
              animate={{
                y: [-12, 12],
                opacity: [0.75, 1],
                scale: [0.96, 1.04],
              }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.8,
                },
                opacity: {
                  duration: 3.1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.6,
                },
                scale: {
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.9,
                },
              }}
            >
              <TwinkelTwo />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
