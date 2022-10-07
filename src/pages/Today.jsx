import React from "react";
import styled from "styled-components";
import Date from "../components/Date";
import Navbar from "../components/Navbar";
import TodayCardGrid from "../components/TodayCardGrid";
const Container = styled.div``;

const Today = ({ day, month, year }) => {
  return (
    <Container>
      <Navbar />
      <Date day={day} month={month} year={year} />
      <TodayCardGrid />
    </Container>
  );
};

export default Today;
