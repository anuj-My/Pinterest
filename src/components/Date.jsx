import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
`;

const DateText = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: ${({ mb }) => mb};
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
`;

const Date = ({ day, month, year }) => {
  return (
    <Container>
      <Wrapper mb="0.5rem">
        <DateText>
          {month} {day}, {year}
        </DateText>
      </Wrapper>
      <Wrapper mb="2rem">
        <Title>Stay Inspired</Title>
      </Wrapper>
    </Container>
  );
};

export default Date;
