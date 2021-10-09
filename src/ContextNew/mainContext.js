import React from "react";

/* Step 1, Creating the context */

const NewContext = React.createContext({ firstName: 'Guest', lastName: 'User' });
// setting default Value

const NewContextProvider = NewContext.Provider;

const NewContextConsumer = NewContext.Consumer;


export { NewContextProvider, NewContextConsumer };

export default NewContext;