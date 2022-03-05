import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CountUp from "react-countup";

const HeroSection = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [projectMaterials, setProjectMaterials] = useState<number>(0);
  const [members, setMembers] = useState<number>(0);
  const [downloads, setDownloads] = useState<number>(0);
  const [writers, setWriters] = useState<number>(0);

  return (
    <section>
      {/* left */}
      <div>
        <h2>
          Largest Online Final Year Projects Library Search project topics,
          download full materials &amp; guidelines. Get freebies for each
          download!
        </h2>

        {/* search */}
        <div>
          <AiOutlineSearch />
          <input
            type="search"
            name=""
            id=""
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="type a search keyword e.g Hotel Management"
          />
          <button>Search Project</button>
        </div>

        {/* number counts */}
        <div>
          {/* project materials */}
          <div>
            <CountUp end={projectMaterials + 20} duration={3} />
          </div>
          {/* members */}
          <div>
            <CountUp end={members + 15} duration={3} />
          </div>
          {/* downloads */}
          <div>
            <CountUp end={downloads + 10} duration={3} />
          </div>
          {/* writers */}
          <div>
            <CountUp end={writers + 5} duration={3} />
          </div>
        </div>
      </div>
      {/* right */}
      <div></div>
    </section>
  );
};

export default HeroSection;
