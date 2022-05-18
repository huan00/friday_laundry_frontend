import React, { useEffect, useState } from 'react'
import '../styles/Carousel.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Carousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      autoSlide()
    }, 7000)
  }, [currentIndex])

  const autoSlide = () => {
    setCurrentIndex(currentIndex === products.length - 3 ? 0 : currentIndex + 1)
  }

  const slideLeft = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 3 : currentIndex - 1)
  }
  const slideRight = () => {
    setCurrentIndex(currentIndex === products.length - 3 ? 0 : currentIndex + 1)
  }
  return (
    <div>
      <div className="carousel-container">
        <FaArrowLeft className="FaLeft" onClick={slideLeft} />
        <FaArrowRight className="FaRight" onClick={slideRight} />
        {products.length &&
          products.map(
            (product, index) =>
              index === currentIndex && (
                <div className="carousel-image" key={product.id}>
                  <img src={product.image} />
                  <img src={products[index + 1].image} />
                  <img src={products[index + 2].image} />
                </div>
              )
          )}
      </div>
    </div>
  )
}

export default Carousel
