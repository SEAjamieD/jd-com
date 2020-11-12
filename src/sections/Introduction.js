import React from "react";
import styled from "@emotion/styled";
import { WidthClamp } from "../components/styled";

export default function Introduction() {
  return (
    <HeaderContainer>
      <WidthClamp>
        <NavBar>
          <nav>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">dba.</a>
              </li>
              <li>
                <a href="#">projects</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </nav>
        </NavBar>
        <Hero>
          <h1>Hi, I'm Jamie —</h1>
          <span>a frontend engineer</span>
        </Hero>
      </WidthClamp>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  background: springgreen;
`;

const NavBar = styled.div`
  ul {
    display: flex;
    justify-content: flex-end;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 145px;
      &:last-child {
        background: lightgrey;
      }

      a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }
    }
  }
`;

const Hero = styled.div`
  background: springgreen;
  width: 100%;
  padding: 0 60px;
  height: calc(100vh - 60px);
  font-family: "Archivo Black", sans-serif;

  h1 {
    padding-top: 20vh;
    font-size: 4em;
  }
  span {
    font-size: 3em;
  }
`;
