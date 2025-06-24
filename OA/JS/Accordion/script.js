const url = "https://dummyjson.com/recipes";

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

// fetchData(url).then((data) => console.log(data));

const getMealType = (data, type) => {
    return data.recipes
        .filter((recipe) => recipe.mealType.includes(type))
        .map((recipe) => recipe.name);
};

const toggleAccordion = (header) => {
    const content = header.nextElementSibling;

    const currentDisplay = window.getComputedStyle(content).display;

    if (currentDisplay === "none") {
        content.style.display = "block"; // Show
    } else {
        content.style.display = "none"; // Hide
    }
};

const createAccordion = (mealsByType) => {
    const accordion = document.getElementById("accordion");
    accordion.innerHTML = "";

    Object.entries(mealsByType).forEach(([mealType, recipes]) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";

        accordionItem.innerHTML = `

            <div onclick="toggleAccordion(this)">
                <span>${mealType}</span>
            </div>
            <div>
                <ul>
                    ${recipes.map((recipe) => `<li>${recipe}</li>`).join("")}
                </ul>
            </div>
        
        `;

        accordion.appendChild(accordionItem);
    });
};

const init = async () => {
    try {
        const data = await fetchData(url);

        const types = new Set(
            data.recipes.flatMap((recipe) => recipe.mealType)
        );
        const arrayTypes = [...types];
        //   'Dinner',
        //   'Lunch' ...

        const mealsByType = {};
        arrayTypes.forEach((type) => {
            mealsByType[type] = getMealType(data, type);
        });
        //  {Appetizer: [ 'Tomato Basil Bruschetta' ],Snacks: [ 'Chapli Kebabs' ]...}

        // get all name that mealType manually
        // const lunch = getMealType(data, "Lunch")

        createAccordion(mealsByType);
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

init();
