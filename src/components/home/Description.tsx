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
          <span className="font-semibold">A smarter menu for Indian restaurants — customizable, contactless, and affordable.</span>
          <span className="opacity-80 font-extralight"> Our </span>
          <span className="font-semibold">digital menu platform</span>
          <span className="opacity-80 font-extralight"> empowers restaurants to </span>
          <span className="font-semibold"> instantly update their offerings for festivals, special events, or daily changes</span>
          <span className="opacity-80 font-extralight"> while giving customers a </span>
          <span className="font-semibold"> seamless browsing experience. No printing costs, no delays — just a modern, flexible, and localized solution</span>
          <span className="opacity-80 font-extralight"> designed for</span>
          <span className="font-semibold"> India's food culture.</span>
        </motion.div>
      </div>
    </div>
  )
};