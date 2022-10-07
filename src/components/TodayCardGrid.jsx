import React from "react";
import styled from "styled-components";
import TodayCard from "./TodayCard";
import { cardData } from "../data";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 1rem;
`;
const TodayCardGrid = () => {
  const cardDataList = cardData.map((item) => {
    return <TodayCard key={item.id} item={item} />;
  });
  return (
    <Container>
      <Grid>{cardDataList}</Grid>
    </Container>
  );
};

export default TodayCardGrid;
