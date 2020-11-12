import React from "react";
import styled from "@emotion/styled";
import { WidthClamp, Section } from "../components/styled";

export default function About({ setIsSnowing }) {
  return (
    <Section
      onMouseEnter={() => setIsSnowing(true)}
      onTouchStart={() => setIsSnowing(true)}
      onMouseLeave={() => setIsSnowing(false)}
      onTouchEnd={() => setIsSnowing(false)}
    >
      <WidthClamp>
        <TextContainer>
          <h2>...ok, so?</h2>
          <p>
            I’m a software engineer, web developer, front end engineer, or UI
            engineer...depending who you ask. Ultimately, I like to build
            things. Currently, I work in Angular and TypeScript, but I really
            enjoy anything that is modern and lets me put colors on the screen.
            I’ve dabbled in Ruby and PHP, but i’m most competent in anything
            JavaScript based.
          </p>
          <p>
            Away from the computer, you’ll find me in the mountains or with my
            family. Preferably both at the same time. And snow. Give me lots of{" "}
            <b className="snow-start">snow</b>.
          </p>
        </TextContainer>
      </WidthClamp>
    </Section>
  );
}

const TextContainer = styled.div`
  max-width: calc(50% - 10px); // 10px account for gutter
  padding-top: 60px;
  padding-left: 60px;
  padding-bottom: 60px;

  h2 {
    margin-bottom: 0.5em;
  }
`;
