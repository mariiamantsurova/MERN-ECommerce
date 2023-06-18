import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: #85a389;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Announcement = () => {
  return (
    <div>
      <Container>Summer deal free shipping on orders over 100$</Container>
    </div>
  )
}

export default Announcement
