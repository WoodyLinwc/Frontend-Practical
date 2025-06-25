const url = "https://dummyjson.com/recipes";

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

const init = async () => {
    try {
        const data = await fetchData(url);

        const names = data.recipes.map((recipe) => recipe.name);

        console.log(names);
    } catch (error) {
        console.error(error);
    }
};

init();
