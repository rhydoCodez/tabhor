import { FormEvent, useState } from "react"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Contact = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  // handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="p-5 bg-gray-100">
      <div>
        <h2>Contact</h2>
        {/* search bar */}
      </div>

      {/* contact Card */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:w-1/2 bg-gray-300 text-gray-100">
          <h3>Our Contact Details</h3>
          <p>183 Okporo Road, Rumuodara, Port Harcourt, Rivers State</p>
          <p>WhatsApp Contact (24/7): 070-8366-4803</p>
          <p>E-mail: support@liveprojectstore.com</p>

          {/* social media icons */}
          <div></div>
        </div>
        <div className="w-full sm:w-1/2 h-80">
          <Carousel autoPlay={true} showThumbs={false}>
            <div className="relative w-full h-80">
              <Image
                src="/assets/five.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/assets/eight.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/assets/fifteen.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/assets/fourteen.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/assets/seven.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* contact form */}
      <div>
        <h3>Have any Questions ? Feel free to ask us!</h3>

        <form action="">
          {/* name */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              id=""
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              id=""
            />
          </div>
          <div>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              id=""
            />
          </div>

          {/* message body -- textarea */}
          <div>
            <textarea
              name=""
              id=""
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-40"
            />
          </div>

          {/* submit form */}
          button
        </form>
      </div>
    </div>
  )
}

export default Contact
