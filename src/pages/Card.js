import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function Card({ onBack }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)

  // sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  // cleanup audio on unmount
  useEffect(() => {
    const audioEl = audioRef.current
    return () => {
      if (audioEl) {
        try {
          audioEl.pause()
          audioEl.currentTime = 0
        } catch (e) {}
      }
    }
  }, [])

  // play audio
  async function playAudio() {
    if (!audioRef.current) return
    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (err) {
      console.warn("Play failed", err)
    }
  }

  // stop audio
  function stopAudio() {
    if (!audioRef.current) return
    try {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    } catch (e) {}
    setIsPlaying(false)
  }

  // try autoplay once
  useEffect(() => {
    ;(async () => {
      try {
        await playAudio()
      } catch (e) {}
    })()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      
      {/* confetti */}
      <div className="confetti-root pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <span key={i} className={`confetti c${i + 1}`} />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.995, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="max-w-4xl w-full relative"
        style={{
          backgroundColor: "rgba(255,255,255,0.92)",
          backgroundImage: "url('/images/paper-texture.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          borderRadius: 12,
          padding: "22px",
        }}
      >
        {/* top controls */}
        <div className="flex justify-between items-start mb-6">
          
          {/* back button */}
          <button
            onClick={onBack}
            className="text-sm bg-white/80 px-3 py-1 rounded-full shadow"
          >
            ←
          </button>

          {/* audio controls */}
          <div className="flex items-center gap-3">
            <audio
              ref={audioRef}
              src="/Ribs.mp3"
              loop
              preload="auto"
              playsInline
            />

            {/* play / stop */}
            <button
              onClick={async () => {
                if (isPlaying) stopAudio()
                else await playAudio()
              }}
              className="bg-white/80 px-3 py-1 rounded-full shadow"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* mute */}
            <button
              onClick={() => setIsMuted((m) => !m)}
              className="bg-white/80 px-3 py-1 rounded-full shadow"
            >
              {isMuted ? "🔇" : "🔊"}
            </button>
          </div>
        </div>

        {/* title */}
        <motion.div
          className="font-handwritten text-center text-2xl mb-2"
          initial={{ y: -140, opacity: 0, rotate: -12 }}
          animate={{
            y: [-140, 0, -26, 0],
            rotate: [-12, 6, -3, 0],
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          Happy Birthday
        </motion.div>

        <motion.div
          className="font-handwritten text-center text-xl mb-4"
          initial={{ y: -120, opacity: 0, rotate: 12 }}
          animate={{
            y: [-120, 0, -18, 0],
            rotate: [12, -6, 3, 0],
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          Sharifah
        </motion.div>

        {/* letter */}
        <div className="font-handwritten text-base leading-relaxed text-[#5b463f]">
          Dearest Sha, <br /><br />

          Happy 24th birthday, my love. You are the most incredible person I know,
          and I am endlessly grateful to have you in my life. From our late-night
          talks to our spontaneous adventures, every moment with you is a treasure.

          Your kindness, intelligence, and beauty never cease to amaze me. I am so
          proud of the person you are and the person you are becoming.

          Life is better with you in it, and I look forward to making many more
          memories together. May this year bring you as much joy and love as you
          have given me.

          You’re a key part of my life and I’m so lucky to have you as my best friend.

          <br /><br />

          Love you with all my heart 🤍
          <br /><br />

          Sincerely, <br />
          Nazeera
        </div>
      </motion.div>
    </div>
  )
}