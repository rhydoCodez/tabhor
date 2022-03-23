import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"

const Whatsapp = () => {
  const urlEncodedText = "Hi, I would like to make enquiries about my project."
  return (
    <div className="bg-gray-100 border border-gray-200/30 shadow-md rounded-full p-3 z-40 fixed bottom-3 right-2">
      <Link href={`https://wa.me/2348069319090?text=${urlEncodedText}`}>
        <a target="_blank">
          <BsWhatsapp className="text-[#25D366] w-7 h-7" />
        </a>
      </Link>
    </div>
  )
}

export default Whatsapp
