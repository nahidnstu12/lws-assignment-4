import { useEffect, useState } from "react";

const baseURL = "http://localhost:8050/v2";

export default function useNewsQuery(params) {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);
  console.log("hooks");

  // console.log("url", params,);

  const fetchNewsData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      console.log("hit before");

      let apiURI = params?.category
        ? `${baseURL}/top-headlines?category=${params?.category}`
        : params?.search
        ? `${baseURL}/search?q=${params?.search}`
        : `${baseURL}/top-headlines`;

      console.log("data", apiURI, params?.category);

      const response = await fetch(apiURI);

      if (!response.ok) {
        const errorMessage = `Fetching news data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setNewsData(data?.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding data...",
    });

    fetchNewsData();
  }, [params?.category, params?.search]);

  console.log({ error });
  return {
    items: newsData,
    error,
    loading,
  };
}
