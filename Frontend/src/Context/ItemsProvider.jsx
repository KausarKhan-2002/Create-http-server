import { createContext, useContext, useState } from "react";

const itemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <itemsContext.Provider value={{ data, setData }}>
      {children}
    </itemsContext.Provider>
  );
};

export const useItems = () => {
  const data = useContext(itemsContext);
  return data
};

export default ItemsProvider;
