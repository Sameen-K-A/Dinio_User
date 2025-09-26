import { motion } from 'framer-motion';

export default function WorksSection() {
  const steps = [
    {
      title: "1. Scan the QR Code",
      description: "Find a Dinio QR code on your table at any partner restaurant."
    },
    {
      title: "2. View the Menu Instantly",
      description: "The menu opens right on your phone — no app, no sign-up, just one tap."
    }
  ];

  return (
    <div className="h-[100dvh] relative w-full flex flex-col items-center justify-center p-8 md:p-10">
      <div className="max-w-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, ease: "easeOut" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut" }}
              className="mb-6"
            >
              <h3 className="text-base md:text-lg font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut" }}
        className="text-center absolute text-sm bottom-10"
      >
        No waiters. No delays. Just smart service.
      </motion.p>
    </div>
  );
};