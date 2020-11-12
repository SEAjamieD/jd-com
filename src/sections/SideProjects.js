import React from "react";
import styled from "@emotion/styled";
import { Section, WidthClamp } from "../components/styled";

export default function SideProjects() {
  return (
    <Section>
      <WidthClamp>
        <HeadlineContainer>
          <h2>blah, blah, side projects.</h2>
        </HeadlineContainer>
        <TextContainer>
          <p>Sometimes I make things to learn something new.</p>
          <p>Sometimes it doesn’t work out. But sometimes, it does.</p>
        </TextContainer>
      </WidthClamp>
    </Section>
  );
}

const HeadlineContainer = styled.div`
  padding-left: 60px;
  padding-top: 60px;
  padding-bottom: 0.5em;
`;

const TextContainer = styled.div`
  padding-left: 60px;
  p {
    margin-bottom: unset;
  }
`;
