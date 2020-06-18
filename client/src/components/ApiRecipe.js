import React, { useEffect, useState } from "react";
import "../App.css";
import "./Recipe.css";

import Recipe from "./Recipe";

const ApiRecipe = () => {
  const APP_ID = "09ac2f76";
  const APP_KEY = "206a822647a60fed31f93c1d856aa4b9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };

    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="container">
      <div className="row mb-5 ">
        <div>
          <i className="fas fa-utensils CCbeige fa-2x"></i>
          <h5 className="title">IT'S TIME TO COOK? </h5>

          <div>
            <h5 className="subtitle">Get your recipe!</h5>
          </div>
        </div>
        <div className="col-12 md-form recipeSearch">
          <textarea
            type="text"
            id="message"
            name="message"
            rows="4"
            className="form-control md-textarea"
            value={search}
            onChange={(e) => updateSearch(e)}
          ></textarea>
          <label htmlFor="name" className="ml-3 mt-4 label">
            Search some ingredients...
          </label>
          <button
            className="ourButton"
            type="submit"
            onClick={(e) => getSearch(e)}
          >
            Search
          </button>
        </div>
      </div>

      <div className="recipes">
        {recipes.map((recipe) => (
          <div>
            <Recipe
              key={recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              calories={recipe.recipe.calories}
              source={recipe.recipe.source}
              url={recipe.recipe.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiRecipe;
