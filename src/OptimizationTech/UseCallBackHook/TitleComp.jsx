import React from "react";

const TitleComp = () => {
  console.log("in TitleComp Component");
  return (
    <div>
      <h2>useCallback Hook</h2>
      <ul>
        <li>
          <h3>What ?</h3>
          <p>
            useCallBack is a hook that will return a memoized version of the
            callback function that only changes if one the dependencies changes
          </p>
        </li>
        <li>
          <h3>Why ?</h3>
          <p>
            It is useful when passing callback functions to <b>optimized</b>{" "}
            child components that rely on reference equality to prevent
            unnecessary renders.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(TitleComp);
