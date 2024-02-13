import { createContext, useContext, useEffect, useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

const initialState = {
  items: [],
};

const NewsContext = createContext(initialState);

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("Develop");

  const { items } = useNewsQuery({ category, search });

  console.log("from hook", category, items);

//   useEffect(()=> {
    
//   }, [])

  return (
    <NewsContext.Provider value={{ setCategory, setSearch }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);

export default NewsProvider;
