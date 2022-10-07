import React from "react";
import styled from "styled-components";
import Pin from "../components/Pin";
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 246px);
  /* grid-template-rows: masonry; */
  grid-auto-rows: 10px;
  justify-content: center;
`;

const PinterestGrid = ({ data }) => {
  const dataList = data.map(({ id, urls, alt_description }) => {
    function randomise() {
      const sizeCollection = ["small", "medium", "large", "xl", "sm"];
      return sizeCollection[Math.floor(Math.random() * sizeCollection.length)];
    }
    let size = randomise();
    return (
      <Pin
        key={id}
        urls={urls}
        size={size}
        alt_description={alt_description}
        img="https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    );
  });
  return <Container>{dataList}</Container>;
};

export default PinterestGrid;
