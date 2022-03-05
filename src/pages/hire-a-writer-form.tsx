import { BiNotepad } from "react-icons/bi";
import {
  BsJournalBookmark,
  BsPlus,
  BsTelephoneForward,
  BsTelephoneX,
} from "react-icons/bs";
import { FaMoneyBillAlt, FaUserGraduate } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const HireAWriterForm = () => {
  return (
    <div>
      <h3>Writer Request Form</h3>

      <form action="" method="POST">
        <h4>Project Details</h4>

        <div>
          <BiNotepad />
          <input
            type="text"
            name="project_topic"
            id="project_topic"
            placeholder="Project Topic *"
            required
          />
        </div>
        <div>
          <BsJournalBookmark />
          <input
            type="text"
            name="project_case_study"
            id="project_case_study"
            placeholder="Project Case Study (optional)"
          />
        </div>
        <div>
          <div>
            <BsPlus />
            <input
              type="text"
              name="project_duration"
              id="project_duration"
              placeholder="Expected Project Duration"
            />
          </div>
          <div>
            <FaMoneyBillAlt />
            <input
              type="number"
              name="project_budget"
              id="project_budget"
              placeholder="Project Budget"
            />
          </div>
        </div>
        <div>
          <textarea
            name="project_info"
            id="project_info"
            placeholder="Tell us about your project, including Supervisor's recommendations. "
          />
        </div>

        <h3>Contact Details</h3>
        <div>
          <div>
            <FaUserGraduate />
            <input
              type="text"
              name="owner_name"
              id="owner_name"
              placeholder="Your Name *"
              required
            />
          </div>
          <div>
            <GoMail />
            <input
              type="email"
              name="owner_email"
              id="owner_email"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div>
          <div>
            <BsTelephoneForward />
            <input
              type="tel"
              name="owner_phone"
              id="owner_phone"
              required
              placeholder="Phone Number *"
            />
          </div>
          <div>
            <BsTelephoneX />
            <input
              type="tel"
              name="owner_phone_alt"
              id="owner_phone_alt"
              placeholder="Alternative Phone Number (optional)"
            />
          </div>
        </div>

        {/* submit request */}
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default HireAWriterForm;
