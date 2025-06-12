const recipesContainer = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');

    const fetchRecipes = async (query = '') => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      return data.meals;
    };

    const displayRecipes = (meals) => {
      recipesContainer.innerHTML = '';
      if (!meals) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
      }
      meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div class="recipe-content">
            <h3 class="recipe-title">${meal.strMeal}</h3>
            <p class="recipe-description">${meal.strInstructions.slice(0, 100)}...</p>
          </div>
          <button onclick="viewDetails(${meal.idMeal})">View Details</button>
        `;
        recipesContainer.appendChild(card);
      });
    };

    const searchRecipes = async () => {
      const query = searchInput.value.trim();
      const meals = await fetchRecipes(query);
      displayRecipes(meals);
    };

    const viewDetails = async (id) => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      const meal = data.meals[0];
      alert(`Meal: ${meal.strMeal}\n\nCategory: ${meal.strCategory}\nArea: ${meal.strArea}`);
    };

    window.addEventListener('DOMContentLoaded', async () => {
      const meals = await fetchRecipes();
      displayRecipes(meals);
    });