import { BsArrowRight } from "react-icons/bs";
import { departments } from "../lib/data";

const Departments = () => {
  const department = departments.map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
      <h5>Project Topics &amp; Materials</h5>
    </div>
  ));
  return (
    <div>
      <div>
        <h2>Featured Departments</h2>
        <p>
          Browse all departments{" "}
          <span>
            <BsArrowRight />
          </span>
        </p>
      </div>
      <div>{department}</div>
      <button>Browse all Deparments</button>
    </div>
  );
};

export default Departments;
