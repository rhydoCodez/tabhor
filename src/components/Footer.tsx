import { WhatsappWidget } from "./utilities"

const Footer = () => {
  return (
    <footer className="relative w-full py-5 text-base bg-gray-900 text-gray-100 font-openSans flex items-center justify-center">
      <p className="text-center font-medium text-xl tracking-[0.3em]">
        TabhorProjects &copy; {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
