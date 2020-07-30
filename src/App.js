import React, { useState, useEffect } from "react";
import Recipe from "./components/Recipe";

function App() {
  const api = {
    id: "3719a7a2",
    key: "c1d04eb0d0edb43593b785e6a93a8c89",
  };

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);

    // fetch(defaultLink)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setRecipe(data.hits);
    // });
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="page">
      <header className="title">What's cooking?</header>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Enter an Ingredient..."
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recpie-container">
        {recipe.map((recipes) => {
          return (
            <Recipe
              key={recipes.recipe.calories}
              title={recipes.recipe.label}
              link={recipes.recipe.shareAs}
              image={recipes.recipe.image}
              nut={recipes.recipe.healthLabels}
              ingredients={recipes.recipe.ingredientLines}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
