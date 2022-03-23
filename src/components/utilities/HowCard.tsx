import { HowItWorksData } from "../../lib/data"

const HowCard = () => {
  const item = HowItWorksData.map((item, index) => {
    const { Icon, title, content } = item

    return (
      <div key={index} className="group my-5 font-openSans">
        <div className="flex w-fit flex-col group-hover:bg-blue-600 rounded-md bg-gray-200 group items-center justify-center border border-gray-200 shadow-md shadow-gray-300 space-y-3 h-64 px-5">
          <Icon className="group-hover:text-white w-10 h-10 text-blue-600" />
          <h3 className="font-medium text-xl group-hover:text-white">
            {title}
          </h3>
          <p className="text-lg text-center group-hover:text-white">
            {content}
          </p>
        </div>
      </div>
    )
  })
  return <div>{item}</div>
}

export default HowCard

// hover:bg-blue-700 hover:text-white
