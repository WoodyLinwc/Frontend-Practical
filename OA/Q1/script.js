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

        // get all name that mealType manually
        // const lunch = getMealType(data, "Lunch")
        console.log(mealsByType);
    } catch (error) {
        console.error("Error fetching data", error);
    }
};

init();
