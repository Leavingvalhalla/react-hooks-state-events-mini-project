import React from 'react';

function CategoryFilter({
  categories,
  handleChangeCategory,
  selectedCategory,
}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        if (category === selectedCategory) {
          return (
            <button
              onClick={(e) => handleChangeCategory(e.target)}
              key={category}
              className="selected"
            >
              {category}
            </button>
          );
        } else {
          return (
            <button
              onClick={(e) => handleChangeCategory(e.target)}
              key={category}
            >
              {category}
            </button>
          );
        }
      })}
    </div>
  );
}

export default CategoryFilter;
