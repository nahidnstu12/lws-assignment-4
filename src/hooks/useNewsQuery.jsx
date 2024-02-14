import { useEffect, useState } from "react";

const baseURL = "http://localhost:8000/v2";

export default function useNewsQuery(params) {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchNewsData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching news data...",
      });

      let apiURI = null;

      if (params) {
        if (params.category) {
          apiURI = `${baseURL}/top-headlines?category=${params.category}`;
        } else if (params.search) {
          apiURI = `${baseURL}/search?q=${params.search}`;
        } else if (params.active) {
          apiURI = `${baseURL}/top-headlines`;
        }
      }

      const response = apiURI ? await fetch(apiURI) : null;

      if (apiURI) {
        if (!response.ok) {
          const errorMessage = `Fetching news data failed: ${response?.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        const responseItems = params.search ? data.result : data.articles;

        setNewsData(responseItems);
      }
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
  }, [params?.category, params?.search, params?.active]);

  console.log({ error });
  return {
    items: newsData,
    error,
    loading,
  };
}
