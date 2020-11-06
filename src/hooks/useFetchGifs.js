import { useState, useEffect } from "react";
import { getGifs } from "../providers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    gifs: [],
    loading: true,
  });
  useEffect(() => {
    const getAllGifs = async () => {
      const response = await getGifs(category);
      setstate({ gifs: response, loading: false });
    };
    getAllGifs();
  }, [category]);
  return state;
};
