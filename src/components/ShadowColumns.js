import React from "react";
import styled from "@emotion/styled";

export default function ShadowColumns() {
  const [grid, SetGrid] = React.useState(false);
  return (
    <>
      <Button onClick={() => SetGrid(!grid)}>{grid ? "off" : "on"}</Button>
      <ShadowContainer showColumns={grid}>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </ShadowContainer>
    </>
  );
}

const Button = styled.button`
  position: fixed;
  width: 40px;
  height: 40px;
  top: 10px;
  left: 10px;
  background: grey;
  border: none;
  outline: 0;
  z-index: 1999;
`;

const ShadowContainer = styled.div`
  display: ${(props) => (props.showColumns === false ? "none" : "grid")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  padding: 0 60px;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  height: 100vh;
  width: 100%;
  max-width: 1280px;
  z-index: 999;

  .column {
    background: grey;
    opacity: 20%;
  }
`;
