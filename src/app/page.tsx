import Image from "next/image"
import LiquidEther from "../components/LiquidEther/LiquidEther.js"

export default function Home() {
  return (

    <section className="mx-auto w-4/5 min-h-screen flex flex-col items-center justify-center font-mono">
      {/* <div className="absolute  w-full h-120 sm:h-150 rounded-2xl mx-auto">
        <LiquidEther
          colors={["#cabef8ff", "#d2b4d1ff", "#B19EEF"]}
          mouseForce={20}
          cursorSize={50}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-black text-4xl">A dialogue with nature</h1>
        <p className="text-black font-sans text-m">
          The traditional Japanese art of flower arrangement, Ikebana, goes
          beyond simple aesthetics— <br />
          it is a profound dialogue with nature, where every stem, leaf, and
          blossom tells a unique story.
        </p>
        <Image
          src="/images/homepageIkebana.png"
          width={250}
          height={250}
          alt="Ikebana entouré d'un lien d'ea
        "
        />
      </div>
      
    </section>

  )
}
