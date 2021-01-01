import React, { useState } from "react";
import { Button, Input } from "../Matrial-ui/imports";
import { ApiCall } from "./ApiCall";
import Images from "./Images";

const SearchBox = () => {
  const [tag, setTag] = useState("");
  const [searchedTag, setSearchedTag]= useState("")
  const searchTag = (e) => {
    setTag((tag) => (tag = e.target.value));
  };


  //setImagesArr(imagesArr=> imagesArr=items)
  

  const Submitsearch = (e) => {
    e.preventDefault();
    setSearchedTag(searchedTag=> searchedTag= tag)
    console.log(items.length)
  };

  const items = ApiCall(
    "https://pixabay.com/api/",
    "19609243-12d760c174b4cae881f477b1f",
    searchedTag
  );
  return (
    <div>
      <form className="search" onSubmit={Submitsearch}>
        <Input
          id="search-box"
          variant="outlined"
          placeholder="Search..."
          value={tag}
          onChange={searchTag}
        ></Input>
        <Button
          id="search-btn"
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          SEARCH
        </Button>
      </form>
      <Images searchedImages={items}/>
    </div>
  );
};

export default SearchBox;
