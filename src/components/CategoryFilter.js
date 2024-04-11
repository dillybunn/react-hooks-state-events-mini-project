function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "selected" : ""}
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
