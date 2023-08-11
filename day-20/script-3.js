document.getElementById('showRecipeBtn').addEventListener('click', fetchRandomRecipe);

function fetchRandomRecipe() {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  axios.get(apiUrl)
    .then((response) => {
      const recipe = response.data.meals[0];
      displayRecipe(recipe);
    })
    .catch((error) => console.error('Error:', error));
}

function displayRecipe(recipe) {
  const recipeImage = document.getElementById('recipeImage');
  const recipeTitle = document.getElementById('recipeTitle');
  const ingredientList = document.getElementById('ingredientList');

  recipeImage.src = recipe.strMealThumb;
  recipeTitle.textContent = recipe.strMeal;


  ingredientList.innerHTML = '';

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe['strIngredient' + i];
    const measure = recipe['strMeasure' + i];

    if (ingredient) {
      const listItem = document.createElement('li');
      listItem.textContent = `${measure} ${ingredient}`;
      ingredientList.appendChild(listItem);
    }
  }
}
