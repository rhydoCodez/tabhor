import { useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import CountUp from "react-countup"
import { Input } from "@nextui-org/react"

const HeroSection = () => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [projectMaterials, setProjectMaterials] = useState<number>(0)
  const [members, setMembers] = useState<number>(0)
  const [downloads, setDownloads] = useState<number>(0)
  const [writers, setWriters] = useState<number>(0)

  return (
    <div className="font-roboto">
      <section className="hero">
        {/* left */}
        <div className="relative flex flex-col justify-center items-center h-full space-y-10">
          <h2 className="text-slate-700 text-xl font-semibold max-w-md self-start my-5">
            <span className="text-orange-700">
              Largest Online Final Year Projects Library
            </span>{" "}
            <span className="text-blue-700">Search</span> project topics,{" "}
            <span className="text-blue-700">download</span> full materials &amp;
            guidelines. <span className="text-blue-700">Get</span> freebies for
            each download!
          </h2>

          {/* search */}
          <div className="w-full sm:flex sm:items-center space-y-3">
            <div className="w-full shadow-gray-600/30 bg-gray-50 flex items-center shadow-md">
              {/* <AiOutlineSearch className="text-gray-700 w-7 h-7 mx-2 opacity-50" /> */}
              <Input
                type="search"
                name=""
                id=""
                size="xl"
                className=""
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                labelPlaceholder="Enter Search Keyword"
                color="secondary"
                fullWidth={true}
              />
            </div>
            <button className="bg-blue-700 px-6 py-2 rounded-md text-white hover:bg-white hover:text-blue-700 text-xl">
              Search Project
            </button>
          </div>

          {/* number counts */}
          <div className="sm:divide-x-2 divide-y-2 w-full divide-gray-700/30 font-openSans text-gray-700  bg-gray-100 p-5 sm:flex sm:items-center shadow-md border border-gray-100 rounded-2xl">
            {/* project materials */}
            <div className="mb-2">
              <CountUp
                separator=","
                className="font-medium text-green-700 text-3xl"
                end={projectMaterials + 2000}
                duration={3}
              />
              <p className="font-semibold text-xl tracking-[0.1em]">
                Project Materials
              </p>
            </div>
            {/* members */}
            <div className="mb-2">
              <CountUp
                separator=","
                className="font-medium text-green-700 text-3xl"
                end={members + 1509}
                duration={3}
              />
              <p className="font-semibold text-xl tracking-[0.1em]">Members</p>
            </div>
            {/* downloads */}
            <div className="mb-2">
              <CountUp
                separator=","
                className="font-medium text-green-700 text-3xl"
                end={downloads + 10}
                duration={3}
              />
              <p className="font-semibold text-xl tracking-[0.1em]">
                Downloads
              </p>
            </div>
            {/* writers */}
            <div className="mb-2">
              <CountUp
                separator=","
                className="font-medium text-green-700 text-3xl"
                end={writers + 5}
                duration={3}
              />
              <p className="font-semibold text-xl tracking-[0.1em]">Writers</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div></div>
      </section>
    </div>
  )
}

export default HeroSection
