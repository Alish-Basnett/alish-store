import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", image: "" });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const createCategory = async () => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/categories",
        newCategory
      );
      setCategories([...categories, response.data]);
      setNewCategory({ name: "", image: "" });
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const updateCategory = async () => {
    try {
      const response = await axios.put(
        `https://api.escuelajs.co/api/v1/categories/${selectedCategory.id}`,
        selectedCategory
      );
      setCategories(
        categories.map((category) =>
          category.id === selectedCategory.id ? response.data : category
        )
      );
      setSelectedCategory(null);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="category-manager">
      <h2>Manage Categories</h2>
      <div className="category-form">
        <input
          type="text"
          placeholder="Category Name"
          value={selectedCategory ? selectedCategory.name : newCategory.name}
          onChange={(e) =>
            selectedCategory
              ? setSelectedCategory({
                  ...selectedCategory,
                  name: e.target.value,
                })
              : setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category Image URL"
          value={selectedCategory ? selectedCategory.image : newCategory.image}
          onChange={(e) =>
            selectedCategory
              ? setSelectedCategory({
                  ...selectedCategory,
                  image: e.target.value,
                })
              : setNewCategory({ ...newCategory, image: e.target.value })
          }
        />
        <button onClick={selectedCategory ? updateCategory : createCategory}>
          {selectedCategory ? "Update Category" : "Create Category"}
        </button>
        {selectedCategory && (
          <button onClick={() => setSelectedCategory(null)}>Cancel</button>
        )}
      </div>
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="category-item">
              <h3>{category.name}</h3>
              <img src={category.image} alt={category.name} />
              <button onClick={() => setSelectedCategory(category)}>
                Edit
              </button>
              <button onClick={() => deleteCategory(category.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryManager;
