import React from "react";
import Snowflakes from "magic-snowflakes";
import styled from "@emotion/styled";

export default function Snow({ isSnowing }) {
  let snowContainer = React.useRef(null);

  React.useEffect(() => {
    const snow = new Snowflakes({
      container: snowContainer,
      count: 100
    });
    return () => snow.destroy();
  }, []);

  return (
    <SnowContainer
      ref={(el) => (snowContainer = el)}
      isSnowing={isSnowing}
    ></SnowContainer>
  );
}

const SnowContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isSnowing ? 1 : 0)};
  transition: 1s;
  z-index: 9000;
  box-sizing: border-box;
  pointer-events: none;
`;
