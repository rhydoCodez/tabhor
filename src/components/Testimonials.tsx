import Image from "next/image"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { testimonials } from "../lib/data"

const Testimonials = () => {
  return (
    <div className="p-5 bg-gray-100">
      {/* carousel -- testimonials */}
      <Carousel autoPlay={true} showThumbs={false}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 text-gray-100 py-8 px-3">
            <h2>{testimonial.name}</h2>
            <div>
              <p>{testimonial.state}</p>
              <p>{testimonial.department}</p>
            </div>
            <p>{testimonial.testimony}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
