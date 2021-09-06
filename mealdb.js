// Variable Declaration 
const displayResults = document.getElementById('dislay-results');
const searchField = document.getElementById('search-field');

const loadMeals = async () => {
    // Get Input Value
    const searchValue = searchField.value;

    // Clear The Input and Main Field
    searchField.value = '';
    displayResults.textContent = '';

    // Load Data Using MealDB API
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    displayMeals(response.meals);
};

// Display Data
const displayMeals = meals => {
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `;
        displayResults.appendChild(div);
    });
};