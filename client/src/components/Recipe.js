import React from "react";
import "../App.css";
import "./Recipe.css";
import style from "./recipe.module.css";

const Recipe = ({ title, ingredients, image, calories, source, url }) => {
  return (
    <div className={style.recipe}>
      <h1 className="title my-3">{title}</h1>
      <img className={style.image} src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>
            <p className="text">{ingredient.text}</p>
          </li>
        ))}
      </ul>
      <p>
        <strong>Calories: </strong>
        {Math.round(calories)}
      </p>
      <i className="fas fa-angle-double-right fa-rotate-90 CCbeige fa-2x mb-3"></i>
      <p>
        {source}
        <strong> · </strong>
        <a href={url}>{url}</a>
      </p>
    </div>
  );
};

export default Recipe;
