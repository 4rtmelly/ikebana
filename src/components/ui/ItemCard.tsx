import Image from "next/image"

export default function ItemCard({
  service = "Hako",
  img = "/images/shop1.jpg",
  textDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utco laboris ",
}) {
  return (
    <>
      <div className="flex flex-col items-center jusitfy-center font-sans">
        <Image
          className="rounded-lg"
          src={img}
          width={200}
          height={250}
          alt="ikebana services"
        />
        <h3 className="text-black text-lg"> {service} </h3>
        <p className="text-black text-base"> {textDescription} </p>
      </div>
    </>
  )
}
