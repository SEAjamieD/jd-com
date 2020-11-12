import React from "react";
import GitHubChart from "../components/GitHubChart";
import styled from "@emotion/styled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Github() {
  const colorList = [
    "pink",
    "lightyellow",
    "green",
    "lime",
    "springgreen",
    "transparent"
  ];

  function pin(element) {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center",
        end: "+=1000",
        pin: true,
        scrub: true,
        markers: true
      }
    });

    tl.fromTo(
      ".content",
      { scale: 0.3, opacity: 0 },
      { scale: 1.5, opacity: 1 }
    );
  }

  let gitHubSection = React.useRef(null);
  React.useEffect(() => {
    pin(gitHubSection);
  }, []);
  return (
    <GitHubSection ref={(el) => (gitHubSection = el)}>
      <div className="mock-height">
        <a href="#">
          <div className="content">
            <span>Skip all this madness and take me straight to Github</span>
            <GitHubChart colorList={colorList} />
          </div>
        </a>
      </div>
    </GitHubSection>
  );
}

const GitHubSection = styled.div`
  padding: 60px;
  background: black;
  text-align: center;

  .mock-height {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    display: block;
    color: white;
    line-height: 1.5;
    margin-bottom: 0.75em;
  }
`;
