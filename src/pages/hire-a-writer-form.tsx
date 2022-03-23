import { Input, Textarea } from "@nextui-org/react"
import { BiNotepad } from "react-icons/bi"
import {
  BsJournalBookmark,
  BsPlus,
  BsTelephoneForward,
  BsTelephoneX,
} from "react-icons/bs"
import { FaMoneyBillAlt, FaUserGraduate } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { Footer, Header } from "../components"

const HireAWriterForm = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* main page */}
      <div className="p-5 pt-12 bg-gray-100 font-openSans">
        <h3 className="my-5 uppercase text-blue-500 font-semibold text-2xl">
          Writer Request Form
        </h3>

        <form action="" method="POST">
          <h4 className="mb-10 uppercase text-blue-700 font-semibold text-xl">
            Project Details
          </h4>

          <div className="shadow-md mt-3">
            <Input
              type="text"
              name="project_topic"
              id="project_topic"
              labelPlaceholder="Project Topic *"
              required
              fullWidth={true}
              size="xl"
              contentLeft={<BiNotepad />}
            />
          </div>
          <div className="shadow-md mt-12">
            <Input
              type="text"
              name="project_case_study"
              id="project_case_study"
              labelPlaceholder="Project Case Study (optional)"
              fullWidth={true}
              size="xl"
              contentLeft={<BsJournalBookmark />}
            />
          </div>
          <div>
            <div className="shadow-md mt-12">
              <Input
                type="text"
                name="project_duration"
                id="project_duration"
                labelPlaceholder="Expected Project Duration"
                fullWidth={true}
                size="xl"
                contentLeft={<BsPlus />}
              />
            </div>
            <div className="shadow-md mt-12">
              <Input
                type="number"
                name="project_budget"
                id="project_budget"
                labelPlaceholder="Project Budget"
                fullWidth={true}
                size="xl"
                contentLeft={<FaMoneyBillAlt />}
              />
            </div>
          </div>
          <div className="mt-12">
            <Textarea
              name="project_info"
              id="project_info"
              labelPlaceholder="Tell us about your project."
              fullWidth={true}
              size="xl"
            />
          </div>

          <h3 className="mb-10 uppercase text-blue-700 font-semibold text-xl mt-5">
            Contact Details
          </h3>
          <div>
            <div className="shadow-md mt-12">
              <Input
                type="text"
                name="owner_name"
                id="owner_name"
                labelPlaceholder="Your Name *"
                required
                fullWidth={true}
                size="xl"
                contentLeft={<FaUserGraduate />}
              />
            </div>
            <div className="shadow-md mt-12">
              <Input
                type="email"
                name="owner_email"
                id="owner_email"
                labelPlaceholder="Email Address"
                fullWidth={true}
                size="xl"
                contentLeft={<GoMail />}
              />
            </div>
          </div>
          <div>
            <div className="shadow-md mt-12">
              <Input
                type="tel"
                name="owner_phone"
                id="owner_phone"
                required
                labelPlaceholder="Phone Number *"
                fullWidth={true}
                size="xl"
                contentLeft={<BsTelephoneForward />}
              />
            </div>
            <div className="shadow-md mt-12">
              <Input
                type="tel"
                name="owner_phone_alt"
                id="owner_phone_alt"
                labelPlaceholder="Alt. Phone Number (optional)"
                fullWidth={true}
                size="xl"
                contentLeft={<BsTelephoneX />}
              />
            </div>
          </div>

          {/* submit request */}
          <button
            type="submit"
            className="bg-blue-800 text-gray-100 px-6 py-3 rounded-full font-semibold text-xl my-5"
          >
            Submit Request
          </button>
        </form>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default HireAWriterForm
