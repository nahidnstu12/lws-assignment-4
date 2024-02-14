import { createContext, useContext, useState } from "react";
import useNewsQuery from "../hooks/useNewsQuery";

const initialState = {
  items: [],
};

const NewsContext = createContext(initialState);

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);

  const { items } = useNewsQuery({ category, search, active });

  return (
    <NewsContext.Provider value={{ setCategory, setSearch, setActive, items }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);

export default NewsProvider;
