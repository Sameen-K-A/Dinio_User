import { motion } from "framer-motion";

export default function Description() {
  return (
    <div className="h-[100dvh] relative w-full flex flex-col items-center justify-center p-8 md:p-10">
      <div className="max-w-xl w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg leading-9 text-center"
        >
          <span className="opacity-80 font-extralight">For restaurants in Kerala and India who want to{" "}</span>
          <span className="font-semibold">improve service speed, reduce errors, and increase customer satisfaction</span>,
          <span className="opacity-80 font-extralight"> our </span>
          <span className="font-semibold">E-menu platform offers a digital, contactless, and customizable ordering solution that is affordable, easy to use</span>,
          <span className="opacity-80 font-extralight"> and localized for Indian customers — unlike expensive foreign POS systems or fragmented local solutions.</span>
        </motion.div>
      </div>
    </div>
  )
};