import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"
import { departments } from "../lib/data"
import { DepartmentCard } from "./utilities"
import one from "../../public/assets/one.jpg"

const Departments = () => {
  return (
    <div className="p-5 bg-gray-100 space-y-6">
      <div>
        <h2 className="text-blue-600 mb-5 text-2xl font-semibold">
          Featured Departments
        </h2>
        <p className="text-blue-500 mb-3 text-xl font-semibold whitespace-nowrap flex items-center space-x-2">
          <span>Browse all departments</span>
          <span>
            <BsArrowRight />
          </span>
        </p>
      </div>
      <div className="space-y-5">
        {/* departments */}
        <DepartmentCard title="Public Administration" />
        <DepartmentCard title="Accounting" />
        <DepartmentCard title="Business Administration and Management" />
        <DepartmentCard title="Mass Communication" />
        <DepartmentCard title="Markteting" />
        <DepartmentCard title="Computer Science and Engineering" />
        <DepartmentCard title="Banking and Finance" />
        <DepartmentCard title="Library and Information Science" />
        <DepartmentCard title="Economics and Co-opeartive Economics" />
        <DepartmentCard title="Mathematics and Statistics" />
        <DepartmentCard title="Science Laboratory Technology" />
        <DepartmentCard title="Civil Engineering" />
        <DepartmentCard title="Building Technology" />
        <DepartmentCard title="Education" />
      </div>
      <button>Browse all Deparments</button>
    </div>
  )
}

export default Departments
