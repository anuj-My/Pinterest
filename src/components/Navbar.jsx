import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/Pinterest-logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import Badge from "@mui/material/Badge";
const Container = styled.div`
  width: 100%;
  height: 8rem;
  padding: 4px 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
`;
const Logo = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
const ImgContainer = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.div`
  background-color: ${({ bg }) => bg};
  border-radius: 5rem;
  /* padding: 1rem 1.6rem; */
`;
const Select = styled.select`
  border: none;
  width: 11rem;
  font-weight: bold;
  font-size: 1.6rem;
  background: no-repeat
    url('data:image/svg+xml;utf,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg>');
  background-position: right 1.8rem top 50%;
  background-size: 25px;
  padding: 0 1.6rem;
  /* Replacing default */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const Center = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Search = styled.div`
  width: 100%;
  height: 4.8rem;
  border-radius: 5rem;
  background-color: #ddd;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const Form = styled.form`
  width: 90%;
`;

const Input = styled.input`
  background-color: transparent;
  color: #767676;
  width: 100%;
  height: 4.5rem;
  border-radius: 5rem;
  border: none;
  font-size: 1.6rem;

  &:focus {
    outline: none;
  }
`;

const Right = styled.div``;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const ProfileImage = styled.img`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
`;

const ArrowContainer = styled.select`
  border: none;
  background-color: transparent;
  width: 2rem;

  &:focus {
    outline: none;
  }
`;
const ArrowOption = styled.option``;

const Navbar = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(keyword);
    setKeyword("");
  };
  return (
    <Container>
      <Left>
        <Logo>
          <ImgContainer>
            <Image src={logo} />
          </ImgContainer>
        </Logo>

        <LinkContainer>
          <LinkWrapper bg="black">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "White",
                fontWeight: "500",
                padding: "1rem 1.6rem",
                display: "inline-block",
              }}
            >
              Home
            </Link>
          </LinkWrapper>
          <LinkWrapper bg="none">
            <Link
              to="/today"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "500",
                padding: "1rem 1.6rem",
                display: "inline-block",
              }}
            >
              Today
            </Link>
          </LinkWrapper>
        </LinkContainer>

        <Select>
          <Option selected disabled>
            Create
          </Option>
          <Option>Create Idea Pin</Option>
          <Option>Create Pin</Option>
        </Select>
      </Left>
      <Center>
        <Search>
          <IconContainer>
            <SearchOutlinedIcon
              style={{ fontSize: "2rem", color: "#767676" }}
            />
          </IconContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="search"
              placeholder="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form>
        </Search>
      </Center>
      <Right>
        <SocialIconContainer>
          <Icon>
            <NotificationsIcon style={{ fontSize: "3rem", color: "#767676" }} />
          </Icon>
          <Icon>
            <Badge badgeContent={3} color="primary" overlap="circular">
              <MapsUgcIcon style={{ fontSize: "3rem", color: "#767676" }} />
            </Badge>
          </Icon>
          <Icon>
            <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU" />
          </Icon>

          <Icon>
            <ArrowContainer>
              <ArrowOption></ArrowOption>
            </ArrowContainer>
          </Icon>
        </SocialIconContainer>
      </Right>
    </Container>
  );
};

export default Navbar;
