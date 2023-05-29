// Carousel.styles.tsx
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #191919;
  position: relative;
  overflow: hidden;
`

export const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 2%;
  background-color: rgba(0, 0, 0, 0.3);
`
export const TitleWrapper = styled.div`
  overflow: hidden;
`

export const Title = styled(motion.h1)`
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
`
export const DescriptionWrapper = styled.div`
  overflow: hidden;
  max-width: 700px;
`

export const Description = styled(motion.p)`
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 1rem;
`

export const Indicators = styled.div`
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled(motion.img)`
  width: 100px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
`

export const Button = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #be3455;
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
