import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Add your slideshow images here
const images = [
  "/images/1.jpg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpg",
  "/images/6.jpg"
]

export default function SceneTwo({ onNext }) {
  const [index, setIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  // Image slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // Click handler: if zoomed, collapse; else proceed to next scene
  const handleClick = () => {
    if (isZoomed) {
      setIsZoomed(false)
    } else {
      onNext()
    }
  }

  // Smaller size for polaroids
  const polaroidSize = "max-w-[140px] md:max-w-[180px]" // smaller on mobile, slightly bigger on medium screens

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#f8f4e3] text-center cursor-pointer p-4"
      onClick={handleClick}
    >
      <motion.p
        className="font-handwritten text-xl mb-6 text-[#5b463f]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        we go on endless adventures together!<br /> click image below to see some of our best moments
      </motion.p>

      {/* Collage frame image */}
      <div className="flex justify-center mb-6">
        <div
          className="frame"
          style={{ cursor: "zoom-in" }}
          onClick={(e) => {
            e.stopPropagation() // prevent onNext from firing
            setIsZoomed((prev) => !prev)
          }}
        >
          <img
            src="/images/bff.png"
            alt="collage"
            className="frame-img"
          />
          <div className="frame-tape tape-left" />
          <div className="frame-tape tape-right" />
        </div>
      </div>

      {/* Zoomed collage overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsZoomed(false)}
            />
            <motion.div
              className="relative z-50 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 p-2 md:p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Polaroid ${i + 1}`}
                  className={`${polaroidSize} rounded-lg shadow-lg cursor-pointer`}
                  whileHover={{ scale: 1.05, rotate: (Math.random() - 0.5) * 10 }}
                  onClick={(e) => e.stopPropagation()} // clicking a polaroid doesn't close zoom
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isZoomed && (
        <span className="mt-10 text-xs opacity-40">(click anywhere to continue)</span>
      )}
    </div>
  )
}