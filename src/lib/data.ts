import { IconType } from "react-icons";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrCloudDownload } from "react-icons/gr";

export interface IProjectMaterialData {
  department: string;
  fullContent: string;
  topic: string;
  preview: string;
}

export const projectMaterialData: IProjectMaterialData[] = [
  {
    department: "",
    fullContent: "",
    topic: "",
    preview: "",
  },
];

// ---------------- How it Works --------------------

export interface IHowItWorks {
  Icon: IconType;
  title: string;
  content: string;
}

export const HowItWorksData: IHowItWorks[] = [
  {
    Icon: AiOutlineSearch,
    title: "Search Project Topic",
    content:
      'search for your project topic on this website. Click on "Download Complete Project" to get the full material',
  },
  {
    Icon: AiOutlineShoppingCart,
    title: "Place Order",
    content:
      'On the "CheckOut Page", enter your full name, email and other details then click on "Place Order".',
  },
  {
    Icon: RiMoneyDollarCircleLine,
    title: "Make Payment",
    content: "pay Service Charge for the Project using the Payment Method.",
  },
  {
    Icon: GrCloudDownload,
    title: "Download Project",
    content:
      'Click on the "Download Now" button to download the project material along with the accompanying freebies.',
  },
];

// --------------- departments -----------------

export const departments: string[] = [
  "Public Administration",
  "Accounting",
  "Business Administration & Management",
  "Mass Communication",
  "Computer Science & Engineering",
  "Marketing",
  "Banking & Finance",
  "Mathematics & Statistics",
  "Education",
];
