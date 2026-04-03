import { motion } from "framer-motion"

export default function SceneOne({ onNext }) {
  return (
    <div
      onClick={onNext}
      className="min-h-screen flex flex-col items-center justify-center bg-[#f8f4e3] text-center cursor-pointer"
    >
      <motion.p
        className="font-handwritten text-2xl mb-4 text-[#5b463f]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        you know you’re my best friend right?
      </motion.p>

      <motion.p
        className="font-handwritten text-lg text-[#7a5c4d]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        and life is so much better with you in it.
      </motion.p>

      <span className="mt-10 text-xs opacity-40">(click anywhere)</span>
    </div>
  )
}