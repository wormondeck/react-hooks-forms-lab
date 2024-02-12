import React from "react";

function Filter({ onCategoryChange, onSearchChange, search}) {
  
  function handleChange(e) {
    console.log(e.target.value)
    onSearchChange(e.target.value)
  }



  return (
    <div className="Filter">
      <input onChange={handleChange} type="text" name="search" placeholder="Search..." value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
