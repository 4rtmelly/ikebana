export default function Separator({ number = "01", label = "[about]" }) {
  return (
    <>
      <div className=" w-full items-center">
        <div className="flex items-center">
          <span className="text-black text-3xl font-sans  mx-3">{number}</span>
          <div className="flex w-full h-px bg-black"></div>
        </div>
        <span className="text-black font-sans ml-10 ">{label}</span>
      </div>
    </>
  )
}
