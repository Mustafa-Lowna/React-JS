import { useState } from "react";

type Recipe = {
  id: number;
  name: string;
  servings: number;
  cuisine: string;
  difficulty: string;
  image: string;
};

const RecipeSearch = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const fetchRecipes = async () => {
    const apiUrl = `https://dummyjson.com/recipes/search?q=${searchTerm}`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4 mt-3">Search Recipes </h1>
      <div className="mb-5 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipes (e.g. Pizz, Chicken, Soup)..."
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
        <button className="btn btn-primary" onClick={() => fetchRecipes()}>
          Search
        </button>
      </div>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-3" key={recipe.id}>
            <div className="card h-100">
              <img
                alt={recipe.name}
                src={recipe.image}
                className="card-img-top"
              />

              <div className="card-body">
                <h4 className="card-title">{recipe.name}</h4>
                <p className="card-body">{recipe.difficulty}</p>
              </div>
              <div className="card-footer">View Details</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeSearch;
