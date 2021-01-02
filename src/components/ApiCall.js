import { useState, useEffect } from "react";
import axios from "axios";
import Images from "./Images";
import Loading from "./Loading";

export const ApiCall = (url, key, searchedItem) => {
  const [items, SetItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${url}/?key=${key}&q=${searchedItem}&image_type=photo&safesearch=true`
      )
      .then((res) => {
        SetItems([...res.data.hits]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url, key, searchedItem]);

   return isLoading?(<div><Loading/></div>):(<Images searchedImages={items}/>)
};
