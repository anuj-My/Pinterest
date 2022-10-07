import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 40.8rem;
  height: 30.6rem;
  position: relative;
`;
const ImgContainer = styled.div`
  border-radius: 5rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0%;
  top: 60%;
  color: White;
  z-index: 2;
`;
const Tagline = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const TodayCard = ({ item }) => {
  const { img, tagline, heading } = item;
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={img} />
        </ImgContainer>
        <InfoContainer>
          <Tagline>{tagline}</Tagline>
          <Title>{heading}</Title>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default TodayCard;
