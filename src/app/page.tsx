import Image from "next/image"

import Separator from "@/components/ui/Separator"
import ItemCard from "@/components/ui/ItemCard"

export default function Home() {
  const items = [1, 2, 3, 4]
  return (
    <>
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
        {/* hero section */}
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-black text-6xl">Ikebana</h1>
          <p className="text-black font-sans text-lg">
            The traditional Japanese art of flower arrangement, Ikebana, goes
            beyond simple aesthetics— <br />
            it is a profound dialogue with nature, where every stem, leaf, and
            blossom tells a unique story.
          </p>
          <Image
            src="/images/homepageIkebana.png"
            width={350}
            height={350}
            alt="Ikebana entouré d'un lien d'ea
        "
          />
        </div>
        <Separator number="01" label="[about]" />
      </section>
      {/* about */}
      <section className="mx-auto w-4/5 min-h-screen flex flex-col items-center justify-center font-sans md:flex-row">
        <div className="flex  flex-col h-full  mt-10 ">
          <h2 className="text-black font-mono text-3xl md:text-5xl">
            {" "}
            Amélie Nguyen{" "}
          </h2>
          <p className="text-black text-lg mt-10 md:w-4/5 ">
            As a certified master and artist of Ikebana, Yui is upholding a
            precious legacy passed down from her mother and grandmother, both
            renowned in this profound art. For Yui, Ikebana is more than just an
            artistic expression. It is a dialogue with nature, showcasing the
            interplay between imperfection and beauty through personal
            philosophy and aesthetic sensibility.
          </p>
        </div>
        <Image
          className="rounded-md mt-10"
          src="/images/about.png"
          width={300}
          height={200}
          alt="photo de personne montrant son oeuvre ikebana"
        />
      </section>
      {/* services */}
      <section className="mx-auto w-4/5 flex flex-col items-center justify-center font-sans">
        <Separator number="02" label="[services]" />
        <div className="flex flex-row mt-10 items-center justify-center">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              service="Hako"
              img="/images/shop1.jpg"
              textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utco laboris "
            />
          ))}
        </div>
      </section>
    </>
  )
}
