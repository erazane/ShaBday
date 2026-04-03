import React, { useState } from "react"
import Splash from "./pages/Splash"
import SceneOne from "./pages/SceneOne"
import SceneTwo from "./pages/SceneTwo"
import SceneThree from "./pages/SceneThree"
import Card from "./pages/Card"

export default function App() {
  const [scene, setScene] = useState("splash")

  const next = () => {
    setScene((prev) => {
      if (prev === "splash") return "one"
      if (prev === "one") return "two"
      if (prev === "two") return "three"
      if (prev === "three") return "card"
      return prev
    })
  }

  const backToStart = () => setScene("splash")

  return (
    <>
      {scene === "splash" && <Splash onContinue={next} />}
      {scene === "one" && <SceneOne onNext={next} />}
      {scene === "two" && <SceneTwo onNext={next} />}
      {scene === "three" && <SceneThree onNext={next} />}
      {scene === "card" && <Card onBack={backToStart} />}
    </>
  )
}