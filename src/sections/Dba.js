import React from "react";
import styled from "@emotion/styled";
import { WidthClamp, Section } from "../components/styled";

export default function Dba() {
  return (
    <Section bgColor="tan">
      <WidthClamp>
        <HeadlineContainer>
          <h2>dba.</h2>
        </HeadlineContainer>
        <Grid>
          <div className="grid-blank"></div>
          <div className="grid-blank tall">
            <svg height="100%" width="100%">
              <defs>
                <linearGradient id="fade">
                  <stop id="stop1" />
                  <stop id="stop2" stop-offset="50%" stopOpacity="100%" />
                  <stop id="stop3" stop-offset="100%" stopOpacity="100%" />
                </linearGradient>
              </defs>
              <line id="line" x1="50%" y1="5" x2="50%" y2="100%" />
              <circle cx="50%" cy="10" r="10" fill="url(#fade)" />
              <circle cx="50%" cy="52%" r="10" />
            </svg>
          </div>
          <JobDescription position="right">
            <span>
              <b>Chef Software</b> September 2019 - Present
            </span>
            <p>
              Acquired in late 2019, I’m actually under the Progress Software
              umbrella now, but still exclusively with Chef products. I work on
              a couple cool applications that help IT Operators manage their
              servers more easily. We use Angular and TypeScript, a little bit
              of Material UI, and some custom componentry. They also let me play
              with d3 -- so thats cool.
            </p>
          </JobDescription>
          <JobDescription position="left">
            <span>
              February 2018 - August 2019 <b>Zumiez</b>
            </span>
            <p>
              Growing up I always wanted to design my own snow outerwear and run
              a snowboard shop. This was kind of the next best thing. Zumiez
              operates over 750 stores on three continents selling all kinds of
              skate, snowboard, and lifestyle gear. I worked on the web store
              helping to keep it running and up to date. With Magento at it’s
              core, PHP was involved, but I mostly worked in JavaScript -
              rebuilding customer tracking across the USA and Canada.
            </p>
          </JobDescription>
          <div className="grid-blank"></div>
          <div className="grid-blank"></div>
        </Grid>
      </WidthClamp>
      <Cta>
        <a href="#">
          <span>
            Wan't more details than that? Let's move this party to LinkedIn
          </span>
        </a>
      </Cta>
    </Section>
  );
}

const HeadlineContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 2em;
  max-width: calc(50% - 10px); // 10px account for gutter
  margin-left: auto;
`;

const JobDescription = styled.div`
  position: relative;
  padding-left: ${(props) => (props.position === "left" ? "60px" : "0")};
  padding-right: ${(props) => (props.position === "right" ? "60px" : "0")};
  text-align: ${(props) => (props.position === "left" ? "right" : "left")};
  padding-bottom: 60px;

  span {
    display: block;
    padding-bottom: 0.75em;
    b {
      font-size: 1.2em;
      font-family: "Archivo Black", sans-serif;
    }
  }
`;

const Cta = styled.div`
  padding: 20px 60px;
  margin-top: 4em;
  text-align: center;
  background: black;
  span {
    font-family: "Archivo Black", sans-serif;
    color: tan;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: 50% 50%;

  .tall {
    grid-row-end: span 2;
    display: grid;
    grid-template-rows: 50% 50%;
  }

  #line {
    stroke: black;
    stroke-width: 3px;
    stroke-dasharray: 15;
    stroke-linecap: round;
  }

  #fade {
    #stop-1 {
      stop-color: red;
    }
    #stop-2 {
      stop-color: blue;
    }
    #stop-3 {
      stop-color: lime;
    }
  }
`;
