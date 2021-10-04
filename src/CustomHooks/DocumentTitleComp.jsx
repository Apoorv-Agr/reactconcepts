import React, { useState } from "react";
import useCustomHookOne from "./useCustomHookOne";

const DocumentTitleComp = () => {
  const [count, setCount] = useState(0);

  useCustomHookOne(count);
  /*   useEffect(() => {
    document.title = `Count ---> ${count}`;
  }, [count]); */

  const updateCountNTitle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={updateCountNTitle}>Update Title</button>
    </div>
  );
};

export default DocumentTitleComp;
