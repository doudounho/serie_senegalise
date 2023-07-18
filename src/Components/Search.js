import React from 'react'
import { useState, useEffect } from 'react';
import "./Search.css";
function Search() {

  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setDatas(json))
  },[] )

  const handleSearchTerm = (e) =>{
    console.log(e.target.value);
    let value = e.target.value;
    setSearchTerm(value);
  };

  console.log(searchTerm)

  return (
    <>
    <div className='searchBar'>
     <input type='Title'
      name='searchBar' 
      id='searchBar' 
      placeholder='Rechercher'
      onChange={handleSearchTerm}/>
    </div>
    <div className='serach_result'>
        {datas
        .filter((val)=>{
            return val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        })
        .map((val) =>{
           return <div className='search_result'key={val.id}>
            {val.title} 
            </div>
        } )}
      
    </div>
    </>
  )
}

export default Search