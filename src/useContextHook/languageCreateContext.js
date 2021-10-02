import React from 'react';


const LanguageContext = React.createContext('');

const LanguageContextProvider = LanguageContext.Provider;

const LanguageContextConsumer = LanguageContext.Consumer;


export { LanguageContextProvider, LanguageContextConsumer };

export default LanguageContext;