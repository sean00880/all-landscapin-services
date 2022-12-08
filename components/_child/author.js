import Image from "next/image"
import Link from "next/link"

export default function author({ name, img, designation }) {
  if(!name && !img) return <></>;

  return (
    <div className="author block py-5">
        <Image src={img || ""} width={60} height={60} className="rounded-full"></Image>        
        <div className="flex flex-col justify-center px-4 bg-white mx-3 rounded-tr-xl rounded-bl-xl rounded-tl-md rounded-br-md">
            <Link href={"https://www.decpdedweb.us/"}><a className="text-md font-bold text-[#2e2d2d] hover:text-[#dd7070]">{name || "No Name"}</a></Link>
            <span className="text-sm text-[#9c4c4c] font-bold">{designation || ""}</span>
        </div>
    </div>
  )
}
