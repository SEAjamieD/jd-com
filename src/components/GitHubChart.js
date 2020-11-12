import React from "react";
import styled from "@emotion/styled";

function Block({ colorList }) {
  const [color, setColor] = React.useState("");

  React.useEffect(() => {
    pickColor();
    const timings = [4000, 5000, 6000, 7000, 8000];
    const randomTiming = timings[Math.floor(Math.random() * timings.length)];
    const interval = setInterval(pickColor, randomTiming);

    return () => clearInterval(interval);
  }, []);

  function pickColor() {
    setColor(colorList[Math.floor(Math.random() * colorList.length)]);
  }

  return <div className="block" style={{ background: `${color}` }}></div>;
}

export default function GitHubChart({ colorList }) {
  const [blocks, setBlocks] = React.useState([]);
  React.useEffect(() => {
    let blockList = [];
    for (let i = 0; i < 125; i++) {
      blockList.push(<Block key={i} colorList={colorList} />);
    }
    setBlocks(blockList);
    return () => {};
  }, []);

  return <Container>{blocks}</Container>;
}

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  background: black;
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(5, 5px);
  column-gap: 5px;
  grid-gap: 5px;

  .block {
    justify-self: stretch;
    transition: background 4s;
  }
`;
