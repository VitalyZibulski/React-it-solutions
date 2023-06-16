import React from 'react';
import styled from "styled-components";
import heroImage from '../../images/hero.png';

const Container = styled.div`
  display: flex;
  height: 90%;
`

const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 500px;
`

const Title = styled.div`
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  text-align: center;
`

const Description = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  font-weight: bold;
  color: white;
  background-color: darkblue;
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  
  &:hover {
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
  }
`

const Hero = () => {
  return (
    <Container>
      <Left>
        <Title>IT-Management - IT Support and IT-Services for everyone!</Title>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non optio
          minima harum aliquam nostrum officiis alias eligendi! Cumque deserunt
          error, officiis molestiae quisquam</Description>
        <ButtonsContainer>
          <Button>About us</Button>
          <Button>Contact us</Button>
        </ButtonsContainer>
      </Left>{" "}
      <Right><Image src={heroImage} /></Right>
    </Container>
  );
};

export default Hero;
