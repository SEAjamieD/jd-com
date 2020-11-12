import React from "react";
// Sections
import Introduction from "./sections/Introduction";
import GitHub from "./sections/Github";
import About from "./sections/About";
import Dba from "./sections/Dba";
import SideProjects from "./sections/SideProjects";
// Utility
import ShadowColumns from "./components/ShadowColumns";
import Snow from "./components/Snow";

export default function App() {
  const [isSnowing, setIsSnowing] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <ShadowColumns />
      <Snow isSnowing={isSnowing} />
      <Introduction />
      <GitHub />
      <About setIsSnowing={setIsSnowing} />
      <Dba />
      <SideProjects />
    </div>
  );
}
