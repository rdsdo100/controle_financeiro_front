import React, { createContext, useState, useContext } from 'react';

interface ITest {
    teste: string
    signOut(arg: string): void;
}

const textContext = createContext<ITest>({} as ITest);

const TestProvider: React.FC = ({ children }) => {
   const [teste , setTeste] = useState<string>('')



    const signOut = (arg: string) => {
       setTeste(arg)
    }

    return (
        <textContext.Provider value ={{teste, signOut}}>
            {children}
        </textContext.Provider>
    );
}

function useTeste(): ITest {
    const context = useContext(textContext);

    return context;
}

export { TestProvider, useTeste   };