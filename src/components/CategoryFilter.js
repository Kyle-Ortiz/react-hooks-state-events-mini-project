import React from "react";

function CategoryFilter({categories,classSelector,catHandler}) {
  const catButtons = categories.map((category,index)=> {
        const isSelected = classSelector === category ? "selected" : null
    return <button key={index}onClick={()=> {
      catHandler(category);
    }}className={isSelected}>{category}</button>
  })
  return ( 
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
