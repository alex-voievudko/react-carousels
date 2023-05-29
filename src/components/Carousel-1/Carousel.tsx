// Carousel.tsx
import { useState, useEffect, useCallback } from 'react'
import { SLIDES } from './slides'
import * as S from './Carousel.styles'

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = useCallback(
    (index: number) => {
      if (index < 0) {
        setCurrentSlide(SLIDES.length - 1)
      } else if (index > SLIDES.length - 1) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(index)
      }
    },
    [setCurrentSlide]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(currentSlide + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [currentSlide, handleSlideChange])

  return (
    <S.Container>
      {SLIDES.map((slide, index) => (
        <S.Slide
          key={index}
          animate={{ y: currentSlide * -100 + 'vh' }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <S.Image src={slide.image} alt={slide.title} />
          <S.Content>
            <S.TitleWrapper>
              <S.Title
                animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : '100%' }}
                transition={{ delay: 1, duration: 0.5, ease: 'easeInOut' }}>
                {slide.title}
              </S.Title>
            </S.TitleWrapper>
            <S.DescriptionWrapper>
              <S.Description
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : '100%' }}
                transition={{ delay: 1.25, duration: 0.75, ease: 'easeInOut' }}>
                {slide.description}
              </S.Description>
            </S.DescriptionWrapper>
            <S.Button
              animate={{ opacity: currentSlide === index ? 1 : 0, scale: currentSlide === index ? 1 : 0 }}
              transition={{ delay: 1.9, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}>
              Read More
            </S.Button>
          </S.Content>
        </S.Slide>
      ))}
      <S.Indicators>
        {SLIDES.map((slide, index) => (
          <S.Indicator
            key={index}
            src={slide.image}
            alt={slide.title}
            animate={{
              scale: currentSlide === index ? 1.2 : 1,
              outline: currentSlide === index ? '2px solid #BE3455' : 'none',
              boxShadow: currentSlide === index ? '0 0 10px #BE3455' : 'none'
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </S.Indicators>
    </S.Container>
  )
}
