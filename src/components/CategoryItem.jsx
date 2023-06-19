import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`
const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>{item.title}</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
