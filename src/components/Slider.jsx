import React from 'react'
import styled from 'styled-components'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-100vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
`
const Image = styled.img`
  height: 80%;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1``
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Slider = () => {
  const handleClick = (direction) => {}
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick('left')
        }}
      >
        <KeyboardArrowLeftIcon style={{ color: '#85A389' }} />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://sneakers-magazine.com/wp-content/uploads/2020/08/nike-sb-dunk-low-pro-chicago-bq6817-600-1920x1280.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>30% OFF</Desc>
            <Button>Shop now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://sneakers-magazine.com/wp-content/uploads/2020/08/nike-sb-dunk-low-pro-chicago-bq6817-600-1920x1280.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>30% OFF</Desc>
            <Button>Shop now</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://sneakers-magazine.com/wp-content/uploads/2020/08/nike-sb-dunk-low-pro-chicago-bq6817-600-1920x1280.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>30% OFF</Desc>
            <Button>Shop now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <KeyboardArrowRightIcon style={{ color: '#85A389' }} />
      </Arrow>
    </Container>
  )
}

export default Slider
