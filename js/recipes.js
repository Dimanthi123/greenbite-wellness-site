// Data for recipes
const recipes = [
    {
        id: 1,
        title: "Avocado Toast with Poached Eggs",
        category: "breakfast",
        image: "../assests/images/ws-12.jpg",
        description: "A nutritious and protein-packed breakfast to start your day right.",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "2 eggs",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Microgreens for garnish (optional)"
        ],
        steps: [
            "Toast the bread until golden and crisp.",
            "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
            "Add lemon juice, salt, and pepper. Mash with a fork until smooth but slightly chunky.",
            "Bring a pot of water to a gentle simmer. Add a splash of vinegar.",
            "Crack eggs into small cups, then gently slide into the simmering water.",
            "Poach eggs for 3-4 minutes until whites are set but yolks are still runny.",
            "Spread avocado mixture on toast, top with poached eggs.",
            "Season with salt, pepper, and red pepper flakes. Garnish with microgreens."
        ],
        nutrition: {
            calories: 350,
            protein: 15,
            carbs: 28,
            fat: 22,
            fiber: 10,
            sugar: 2
        }
    },
    {
        id: 2,
        title: "Quinoa Salad with Roasted Vegetables",
        category: "lunch",
        image: "../assests/images/ws-13.jpg",
        description: "A colorful and nutrient-dense salad perfect for lunch or as a side dish.",
        ingredients: [
            "1 cup quinoa, rinsed",
            "2 cups vegetable broth",
            "1 bell pepper, diced",
            "1 zucchini, diced",
            "1 cup cherry tomatoes, halved",
            "1/2 red onion, sliced",
            "2 tbsp olive oil",
            "1/4 cup feta cheese, crumbled",
            "2 tbsp fresh lemon juice",
            "1 tbsp fresh herbs (parsley, mint, or basil)",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat oven to 400°F (200°C).",
            "Cook quinoa in vegetable broth according to package instructions. Let cool.",
            "Toss vegetables with olive oil, salt, and pepper. Spread on baking sheet.",
            "Roast vegetables for 20-25 minutes until tender and slightly caramelized.",
            "In a large bowl, combine cooled quinoa and roasted vegetables.",
            "Add lemon juice, herbs, and feta cheese. Toss gently to combine.",
            "Adjust seasoning with salt and pepper as needed.",
            "Serve at room temperature or chilled."
        ],
        nutrition: {
            calories: 280,
            protein: 9,
            carbs: 35,
            fat: 12,
            fiber: 6,
            sugar: 7
        }
    },
    {
        id: 3,
        title: "Grilled Salmon with Asparagus",
        category: "dinner",
        image: "../assests/images/ws-14.jpg",
        description: "A heart-healthy dinner rich in omega-3 fatty acids and antioxidants.",
        ingredients: [
            "2 salmon fillets (6 oz each)",
            "1 bunch asparagus, trimmed",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "1 lemon, sliced",
            "1 tsp dill weed",
            "Salt and pepper to taste"
        ],
        steps: [
            "Preheat grill to medium-high heat.",
            "Pat salmon dry and season with salt, pepper, and dill.",
            "Toss asparagus with olive oil, garlic, salt, and pepper.",
            "Place salmon skin-side down on grill. Arrange asparagus alongside.",
            "Grill for 5-6 minutes, then carefully flip salmon and turn asparagus.",
            "Grill for another 4-5 minutes until salmon flakes easily and asparagus is tender.",
            "Serve with lemon slices for squeezing over the top."
        ],
        nutrition: {
            calories: 420,
            protein: 35,
            carbs: 8,
            fat: 28,
            fiber: 4,
            sugar: 3
        }
    },
    {
        id: 4,
        title: "Green Power Smoothie",
        category: "smoothie",
        image: "../assests/images/ws-20.jpg",
        description: "A nutrient-packed smoothie that provides energy and essential vitamins.",
        ingredients: [
            "1 cup spinach",
            "1/2 banana, frozen",
            "1/2 cup pineapple chunks",
            "1/2 cup Greek yogurt",
            "1 tbsp chia seeds",
            "1 cup almond milk",
            "1 tsp honey (optional)"
        ],
        steps: [
            "Add all ingredients to a blender.",
            "Blend on high until smooth and creamy.",
            "Add more liquid if needed to reach desired consistency.",
            "Taste and adjust sweetness if necessary.",
            "Pour into glass and enjoy immediately."
        ],
        nutrition: {
            calories: 250,
            protein: 12,
            carbs: 38,
            fat: 7,
            fiber: 8,
            sugar: 24
        }
    },
    {
        id: 5,
        title: "Energy Bites",
        category: "snack",
        image: "../assests/images/ws-15.jpg",
        description: "No-bake snacks perfect for a quick energy boost any time of day.",
        ingredients: [
            "1 cup rolled oats",
            "1/2 cup almond butter",
            "1/3 cup honey or maple syrup",
            "1/4 cup chia seeds",
            "1/4 cup dark chocolate chips",
            "1/4 cup shredded coconut",
            "1 tsp vanilla extract",
            "Pinch of salt"
        ],
        steps: [
            "In a medium bowl, mix all ingredients until well combined.",
            "Cover and refrigerate for 30 minutes to firm up.",
            "Scoop out tablespoon-sized portions and roll into balls.",
            "Store in an airtight container in the refrigerator for up to 2 weeks."
        ],
        nutrition: {
            calories: 120,
            protein: 3,
            carbs: 14,
            fat: 7,
            fiber: 3,
            sugar: 8
        }
    },
    {
        id: 6,
        title: "Mediterranean Bowl",
        category: "lunch",
        image: "../assests/images/ws-17.jpg",
        description: "A fresh and flavorful bowl inspired by Mediterranean cuisine.",
        ingredients: [
            "1 cup cooked chickpeas",
            "1/2 cup quinoa, cooked",
            "1/2 cucumber, diced",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup red onion, thinly sliced",
            "1/4 cup kalamata olives",
            "2 tbsp feta cheese, crumbled",
            "1 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 tsp oregano",
            "Salt and pepper to taste"
        ],
        steps: [
                        "In a large bowl, combine chickpeas, quinoa, cucumber, tomatoes, onion, and olives.",
            "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
            "Pour dressing over salad and toss to combine.",
            "Top with crumbled feta cheese.",
            "Serve immediately or refrigerate for later."
        ],
        nutrition: {
            calories: 380,
            protein: 13,
            carbs: 45,
            fat: 18,
            fiber: 11,
            sugar: 8
        }
    }
];

// DOM Elements
const recipesContainer = document.getElementById('recipes-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search');
const recipeModal = document.getElementById('recipe-modal');
const closeModal = document.querySelector('.close-modal');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display recipes
    displayRecipes(recipes);
    
    // Set up event listeners
    setupEventListeners();
});

// Display recipes in the recipes container
function displayRecipes(recipesToShow) {
    if (!recipesContainer) return;
    
    recipesContainer.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        recipesContainer.innerHTML = '<p class="no-results">No recipes found matching your criteria.</p>';
        return;
    }
    
    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-tags">
                    <span class="recipe-tag">${recipe.category}</span>
                </div>
            </div>
        `;
        
        recipeCard.addEventListener('click', () => {
            openRecipeModal(recipe);
        });
        
        recipesContainer.appendChild(recipeCard);
    });
}

// Open recipe modal with full details
function openRecipeModal(recipe) {
    if (!recipeModal) return;
    
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-title').textContent = recipe.title;
    
    // Set tags
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = `<span class="recipe-tag">${recipe.category}</span>`;
    
    // Set ingredients
    const modalIngredients = document.getElementById('modal-ingredients');
    modalIngredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
    });
    
    // Set steps
    const modalSteps = document.getElementById('modal-steps');
    modalSteps.innerHTML = '';
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        modalSteps.appendChild(li);
    });
    
    // Set nutrition
    const modalNutrition = document.getElementById('modal-nutrition');
    modalNutrition.innerHTML = `
        <tr>
            <td>Calories</td>
            <td>${recipe.nutrition.calories}</td>
            <td>${Math.round(recipe.nutrition.calories / 2000 * 100)}%</td>
        </tr>
        <tr>
            <td>Protein</td>
            <td>${recipe.nutrition.protein}g</td>
            <td>${Math.round(recipe.nutrition.protein / 50 * 100)}%</td>
        </tr>
        <tr>
            <td>Carbohydrates</td>
            <td>${recipe.nutrition.carbs}g</td>
            <td>${Math.round(recipe.nutrition.carbs / 300 * 100)}%</td>
        </tr>
        <tr>
            <td>Fat</td>
            <td>${recipe.nutrition.fat}g</td>
            <td>${Math.round(recipe.nutrition.fat / 65 * 100)}%</td>
        </tr>
        <tr>
            <td>Fiber</td>
            <td>${recipe.nutrition.fiber}g</td>
            <td>${Math.round(recipe.nutrition.fiber / 25 * 100)}%</td>
        </tr>
        <tr>
            <td>Sugar</td>
            <td>${recipe.nutrition.sugar}g</td>
            <td>${Math.round(recipe.nutrition.sugar / 50 * 100)}%</td>
        </tr>
    `;
    
    // Show modal
    recipeModal.style.display = 'block';
}

// Filter recipes based on category and search term
function filterRecipes() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredRecipes = recipes;
    
    // Filter by category
    if (category !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredRecipes = filteredRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) || 
            recipe.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Display filtered recipes
    displayRecipes(filteredRecipes);
}

// Set up all event listeners
function setupEventListeners() {
    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            recipeModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });
    
    // Filter recipes
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterRecipes);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterRecipes);
    }
}