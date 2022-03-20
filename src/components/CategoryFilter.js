import React from 'react';

function CategoryFilter({ categories, handleChangeCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button onClick={(e) => handleChangeCategory(e.target)} key={category}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
