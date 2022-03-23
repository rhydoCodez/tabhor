import Image from "next/image"
import one from "../../../public/assets/one.jpg"

export interface IDepartment {
  title: string
  bgImage?: StaticImageData
}

const DepartmentCard = ({ title, bgImage }: IDepartment) => {
  return (
    <section className="dept w-full px-2 py-5">
      <div className={`relative flex flex-col items-center`}>
        {/* <div className="absolute inset-x-0 inset-y-0 -z-20 opacity-30">
        <div className="relative w-60 h-60 object-cover">
          <Image
            src="/assets/one.jpg"
            alt=""
            width={240}
            height={240}
            objectFit="cover"
          />
        </div>
      </div> */}
        <h3 className="text-2xl mb-3 text-center text-slate-900 font-bold">
          {title}
        </h3>
        <button className="bg-blue-700 text-gray-100 font-semibold text-lg px-6 py-2 rounded-full">
          Project Topics and Materials
        </button>
      </div>
    </section>
  )
}

export default DepartmentCard
