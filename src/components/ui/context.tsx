import React, { createContext, useContext } from 'react';

interface Item {
  ID: string;
  Name: string;
}

interface PathContextType {
  selectedPath: Item[];
  setSelectedPath: (path: Item[]) => void;
}

const PathContext = createContext<PathContextType | undefined>(undefined);

export const PathProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPath, setSelectedPath] = React.useState<Item[]>([]);

  return (
    <PathContext.Provider value={{ selectedPath, setSelectedPath }}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = () => {
  const context = useContext(PathContext);
  if (!context) {
    throw new Error('usePath must be used within a PathProvider');
  }
  return context;
};