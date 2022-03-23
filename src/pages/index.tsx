import type { NextPage } from "next"
import Head from "next/head"
import {
  Header,
  HeroSection,
  HowItWorks,
  Footer,
  Departments,
  Testimonials,
} from "../components"
import { CheckOut, HowCard, WhatsappWidget } from "../components/utilities"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Header />
        <HeroSection />
        <HowItWorks />
        <Departments />
        {/* carousel */}
        <Testimonials />
        {/* <CheckOut /> */}
        <WhatsappWidget />
        <Footer />
      </main>
    </div>
  )
}

export default Home
