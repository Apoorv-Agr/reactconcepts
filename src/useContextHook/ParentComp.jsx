import React, { useContext } from "react";
import ChildComp from "./ChildComp";
import LanguageContext from "./languageCreateContext";
import ThemeContext from "./themeCreateContext";

const ParentComp = () => {
  const themeContextVal = useContext(ThemeContext);
  const languageContextVal = useContext(LanguageContext);
  return (
    <div>
      <h2>ParentComp</h2>
      <p>
        Consuming/Accessing multiple context using <b>useContext Hooks</b>{" "}
      </p>
      <p><b>Context Values :- </b>{` ThemeContext => ${themeContextVal}, LanguageContext => ${languageContextVal}`}</p>
      <ChildComp />
    </div>
  );
};

export default ParentComp;
