import React from "react";
import SearchIcon from '../../asset/svg/SearchIcon'
import { useDispatch, useSelector } from "react-redux";
import { onSearch, onText, selectText } from "../../redux/slice/product/productSlice";
import './SearchForm.css'

const SearchForm = () => {

const dispatch = useDispatch()
const text = useSelector(selectText)

const searchProducts = (e) => {
  e.preventDefault()
  dispatch(onSearch())
}

  return (
    <div className="serach-block">
      <form onSubmit={searchProducts}>
       <div className="input-block"> 
        <SearchIcon/>
       <input 
          type="search" 
          placeholder="Search Restaurant, Shop, Item" 
          value={text} 
          onChange={(e) => dispatch(onText(e.target.value))}
        />
       </div>
      <div className="search-btn">
        <button>Search</button>
      </div>
      </form>
    </div>
  );
};

export default SearchForm;
