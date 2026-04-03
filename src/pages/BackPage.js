import React from 'react'
import { motion } from 'framer-motion'

export default function BackPage({ onClose }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-2xl bg-midcentury-cream/95 rounded-2xl p-8 shadow">
        <h3 className="text-2xl font-handwritten text-midcentury-teal mb-4">A little note</h3>
        <p className="text-midcentury-warmgray mb-6">This is a small back/info page. You can add a short message, directions, or a printable note here. Use this to include a poem, a link, or short instructions for the surprise.</p>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-full bg-midcentury-orange text-white font-semibold">Return</button>
        </div>
      </motion.div>
    </div>
  )
}
