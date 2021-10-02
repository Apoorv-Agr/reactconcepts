import React from "react";
import { LanguageContextProvider } from "./languageCreateContext";
import ParentComp from "./ParentComp";
import { ThemeProvider } from "./themeCreateContext";

const GrandParentComp = () => {
  return (
    <div>
      <ThemeProvider value={"Normal"}>
        <LanguageContextProvider value={"English"}>
          <h1>GrandParentComp</h1>
          <ParentComp />
        </LanguageContextProvider>
      </ThemeProvider>
    </div>
  );
};

export default GrandParentComp;
