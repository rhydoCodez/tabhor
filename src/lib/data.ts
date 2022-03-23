import { IconType } from "react-icons"
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineCloudDownload,
} from "react-icons/ai"
import { RiMoneyDollarCircleLine } from "react-icons/ri"

export interface IProjectMaterialData {
  department: string
  fullContent: string
  topic: string
  preview: string
}

export const projectMaterialData: IProjectMaterialData[] = [
  {
    department: "",
    fullContent: "",
    topic: "",
    preview: "",
  },
]

// ---------------- How it Works --------------------

export interface IHowItWorks {
  Icon: IconType
  title: string
  content: string
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
    Icon: AiOutlineCloudDownload,
    title: "Download Project",
    content:
      'Click on the "Download Now" button to download the project material along with the accompanying freebies.',
  },
]

// --------------- departments -----------------

export interface IDepartments {
  // bgImage: StaticImageData;
  title: string
}

export const departments: IDepartments[] = [
  {
    // bgImage: two,
    title: "Public Administration",
  },
  {
    title: "Accounting",
    // bgImage: three,
  },
  {
    title: "Business Administration & Management",
    // bgImage: four,
  },
  {
    // bgImage: five,
    title: "Mass Communication",
  },
  {
    // bgImage: six,
    title: "Computer Science & Engineering",
  },
  {
    // bgImage: seven,
    title: "Marketing",
  },
  {
    // bgImage: nine,
    title: "Banking & Finance",
  },
  {
    // bgImage: ten,
    title: "Mathematics & Statistics",
  },
  {
    // bgImage: twelve,
    title: "Education",
  },
]

// ---------- testimonial -----------

export interface ITestimonial {
  name: string
  testimony: string
  state?: string
  department?: string
}

export const testimonials: ITestimonial[] = [
  {
    name: "Nike Adekoga",
    testimony:
      "your support service was amazing. I was able to write my project from chapter one to five, Courtesy of your support! Tabhor Project Rocks!!!.",
    state: "Osogbo, Osun State",
    department: "Family Planning Education.",
  },
  {
    name: "Nike Adekoga",
    testimony:
      "your support service was amazing. I was able to write my project from chapter one to five, Courtesy of your support! Tabhor Project Rocks!!!.",
    state: "Osogbo, Osun State",
    department: "Family Planning Education.",
  },
  {
    name: "Nike Adekoga",
    testimony:
      "your support service was amazing. I was able to write my project from chapter one to five, Courtesy of your support! Tabhor Project Rocks!!!.",
    state: "Osogbo, Osun State",
    department: "Family Planning Education.",
  },
  {
    name: "Nike Adekoga",
    testimony:
      "your support service was amazing. I was able to write my project from chapter one to five, Courtesy of your support! Tabhor Project Rocks!!!.",
    state: "Osogbo, Osun State",
    department: "Family Planning Education.",
  },
]
