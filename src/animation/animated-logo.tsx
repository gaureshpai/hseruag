import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5,
        }}
        className="h-full w-full flex items-center justify-center md:m-4"
      >
        <motion.img
          src="/images/logo.png"
          alt="Logo"
          className="max-h-[100px] max-w-[100px]"
        />
      </motion.div>
    </AnimatePresence>
  );
}
