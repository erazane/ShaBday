import { motion } from "framer-motion"

export default function SceneThree({ onNext }) {
  return (
    <div
      onClick={onNext}
      className="min-h-screen flex flex-col items-center justify-center bg-[#f8f4e3] text-center cursor-pointer px-6"
    >
      <motion.p
        className="font-handwritten text-lg mb-4 text-[#5b463f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        and i just wanted you to know…
      </motion.p>

      <motion.p
        className="font-handwritten text-2xl mb-4 text-[#7a4a3a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        i love you so much
      </motion.p>

      <motion.p
        className="font-handwritten text-lg text-[#5b463f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        and i’m so grateful God gave me a friend like you
      </motion.p>

      <span className="mt-10 text-xs opacity-40">(one more)</span>
    </div>
  )
}