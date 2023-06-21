import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send'

const Container = styled.div`
  height: 60vh;
  background-color: #a2cdb0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Button = styled.button`
  height: 100%;
  background: #85a389;
  border: none;
  cursor: pointer;
  flex: 1;
  color: white;
`
const Input = styled.input`
  border: none;
  height: 90%;
  flex: 8;
  padding-left: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get updates from your favorite items timely</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
