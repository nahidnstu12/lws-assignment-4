import { createContext, useContext, useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

const initialState = {
  items: [],
};

const NewsContext = createContext(initialState);

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState(null);  // for category
  const [search, setSearch] = useState("");  //for seaarching
  const [active, setActive] = useState(null); //for default calling

  const { items, loading, error } = useNewsQuery({ category, search, active });

  // console.log({ category, search, active });

  return (
    <NewsContext.Provider
      value={{ setCategory, setSearch, setActive, items, loading, error }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);

export default NewsProvider;
