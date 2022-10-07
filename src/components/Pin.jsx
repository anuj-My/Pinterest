import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-row-end: span ${({ pinSize }) => pinSize === "small" && 26};
  grid-row-end: span ${({ pinSize }) => pinSize === "large" && 45};
  grid-row-end: span ${({ pinSize }) => pinSize === "medium" && 33};
  grid-row-end: span ${({ pinSize }) => pinSize === "xl" && 50};
  grid-row-end: span ${({ pinSize }) => pinSize === "sm" && 36};
  border-radius: 1.6rem;
  margin: 1rem;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Pin = ({ size, urls, alt_description }) => {
  return (
    <Container pinSize={size}>
      <Image src={urls.regular} alt={alt_description} />
    </Container>
  );
};

export default Pin;
