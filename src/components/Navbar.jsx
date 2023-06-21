import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const Container = styled.div`
  height: 60px;
  color: black;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  height: 25px;
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const Input = styled.input`
  border: none;
  height: 90%;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Center = styled.div`
  text-align: center;
  flex: 1;
`
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`
const MenuLink = styled.div`
  margin-left: 25px;
  font-size: 14px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sneaker</Logo>
        </Center>
        <Right>
          <MenuLink>Register</MenuLink>
          <MenuLink>Sign in</MenuLink>
          <MenuLink>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </MenuLink>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
