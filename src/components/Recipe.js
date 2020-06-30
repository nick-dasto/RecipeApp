import React, { useState } from "react";
import Allergy from "./Allergy";
import Ingredients from "./Ingredients";

const Recipe = ({ title, link, image, nut, ingredients }) => {
  const [popup, setPopup] = useState(false);

  const showIngredients = () => {
    setPopup(!popup);
  };

  return popup ? (
    <div className="list">
      <Ingredients
        ingredients={ingredients}
        showIngredients={showIngredients}
      />
    </div>
  ) : (
    <div className="each-recpie">
      <div key={Math.random() * 10000}>
        <div className="img-container" key={Math.random() * 10000}>
          <img src={image} alt="" />
          <button
            key={Math.random() * 10000}
            className="img-button"
            onClick={showIngredients}
          >
            Ingedients
          </button>
        </div>
        <h1>{title.length > 26 ? `${title.substring(0, 24)}...` : title}</h1>
        <Allergy nut={nut} />
        <h3>
          <a href={link}>View Full Meal Deatails</a>
        </h3>
      </div>
    </div>
  );
};

export default Recipe;
