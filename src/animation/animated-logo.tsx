import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
        className="flex h-full w-full items-center justify-center md:m-4"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={1080}
          height={1080}
          priority
          className="max-h-[100px] max-w-[100px]"
        />
      </motion.div>
    </AnimatePresence>
  );
}
