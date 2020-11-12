import styled from "@emotion/styled";

export const WidthClamp = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Section = styled.div`
  position: relative;
  min-height: 60vh;
  background: ${(props) => (props.bgColor ? props.bgColor : "white")};
  overflow: ${(props) => (props.hideOverflow ? "hidden" : "initial")};
`;
