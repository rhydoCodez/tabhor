import React from "react"
import { IoMenuOutline } from "react-icons/io5"
import { IoMdClose } from "react-icons/io"
import Link from "next/link"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { getSession, signIn, useSession } from "next-auth/react"
import { NextApiRequest } from "next"
import { Session } from "next-auth"

import { Login } from "../components/utilities"
import Image from "next/image"

const Navbar = () => {
  const { data: session, status } = useSession()
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[999] flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-500 text-gray-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between font-openSans">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* ---- logo ---- */}
            <div>
              <Link href="/">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                  Tabhor projects
                </a>
              </Link>
            </div>

            {/* <div>
              <Image src="/assets/logo.png" alt="" width={50} height={50} />
            </div> */}
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <IoMdClose /> : <IoMenuOutline />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <Link href="/hire-a-writer">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Hire a Writer</span>
                  </a>
                </Link>
              </li>
              {/* login component */}
              <div></div>
              <li className="nav-item">
                <Link href="/contact">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context)
  console.log(session)

  return {
    props: {
      session,
    },
  }
}
