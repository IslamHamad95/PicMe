import { useState, useEffect } from "react";
import axios from "axios";

export const ApiCall = (url, key, searchedItem) => {
  const [items, SetItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${url}/?key=${key}&q=${searchedItem}&image_type=photo&safesearch=true`
      )
      .then((res) => SetItems( [...res.data.hits] ))
      .catch((err) => console.log(err));
      
  }, [url,key,searchedItem]);
  
  return items;
};
