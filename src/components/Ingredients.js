import React from "react";

const Ingredients = ({ ingredients, showIngredients }) => {
  return (
    <>
      <ol>
        {ingredients.map((i) => (
          <li key={Math.random() * 300000000}>{i}</li>
        ))}
      </ol>
      <button className="close-button" onClick={showIngredients}>
        Close
      </button>
    </>
  );
};

export default Ingredients;
