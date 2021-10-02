import React from "react";
import { LanguageContextConsumer } from "./languageCreateContext";
import { ThemeConsumer } from "./themeCreateContext";

const ChildComp = () => {
  return (
    <div>
      <h3>ChildComp {`---->`} Nested Context Example </h3>
      <ThemeConsumer>
        {(themValue) => {
          return (
            <LanguageContextConsumer>
              {(languageVal) => {
                return (
                  <>
                    <p>
                      Accessing Theme Context Value in Child Component{" "}
                      {themValue}.
                    </p>
                    <p>
                      Accessing Language Context in Child Component{" "}
                      {languageVal}.
                    </p>
                  </>
                );
              }}
            </LanguageContextConsumer>
          );
        }}
      </ThemeConsumer>
    </div>
  );
};

export default ChildComp;
