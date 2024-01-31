import React from 'react'
import SearchIcon from '../../asset/svg/SearchIcon'

const SearchMap = () => {
  return (
    <div className="serach_map-block">
    <form>
      <SearchIcon/>
      <input type="search" placeholder="Enter your address" />
    </form>
    <div className="confirm-btn">
      <button>Confirm</button>
    </div>
  </div>
  )
}

export default SearchMap