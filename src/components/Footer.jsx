import styled from 'styled-components'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import RoomIcon from '@mui/icons-material/Room'
import PhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sneaker.</Logo>
        <Description>
          Lorem ipsum dolor sit amet, con Lorem ipsum dolor sit amet
        </Description>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Terms of service</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '20px' }} />
          Netanya , str.Pines
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '20px' }} />+ 952 58 599 69 29
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: '20px' }} />
          contact_sneaker@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
