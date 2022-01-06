const meal = document.getElementById("meal");


function getRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        const randomMeal = data.meals[0];
        showMealInfo(randomMeal);
    })
    .catch(error => console.log('ERROR'))
}


function showMealInfo(data) {
    meal.innerHTML = "";

    const ingredients = [];

    // get and count ingredients
    for (let i = 1; i <= 20; i++) {
        if (data["strIngredient" + i]) {
            ingredients.push( `${data["strIngredient" + i]} - ${data["strMeasure" + i] }` );
        } 
        else {
            break;
        }
    }

    meal.innerHTML = `
        <div>
        <h1>${data.strMeal}</h1>
        <img src="${data.strMealThumb}" alt="${data.strMeal}" />
        <p>   ${data.strInstructions}  </p>
        <h3>Ingredients</h3>
        <ul>
            ${ ingredients.map( (ingredient) => ` <li> ${ingredient} </li> `).join("")}
        </ul>
        </div>
        
        
    `;
}

getRandomMeal();
