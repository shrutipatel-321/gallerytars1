import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Search.css';
import { FaSearch } from 'react-icons/fa';

const Search = ({ result, setResult }) => {
  const [value, setValue] = useState("")
  useEffect(() => {
    const getImages = async (value) => {
      try {
        const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=30&query=${value}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setResult(res);
        // setImgs(result.data.results);
      }
      catch (e) {
        console.log(e);
      }
    }
    getImages(value);
    // console.log(result);
  }, [value])
  useEffect(() => {
    setValue("welcome");
  }, [])


  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="topbar">
      <h2>ImageGallery</h2>
      <div className="search-bar">
        <FaSearch id='search-icon' className='imported-icon' />
        <input
          // type="text" 
          placeholder='search...'
          value={value}
          onChange={(e) => { handleChange(e) }}
        />
      </div>

    </div>
  )
}

export default Search;