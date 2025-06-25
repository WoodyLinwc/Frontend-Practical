const url = "https://dummyjson.com/recipes";

let allNames = [];

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const displayResults = (filteredNames) => {
    const results = document.getElementById("results");

    if (filteredNames.length === 0) {
        results.innerHTML = "<p>No meals found </p>";
        return;
    }

    // join('') make array to a big string
    const resultsList = filteredNames.map((name) => `<p>${name}</p>`).join("");

    results.innerHTML = resultsList;
};

const filterMeals = (searchTerm) => {
    if (searchTerm === "") {
        document.getElementById("results").innerHTML = "";
        return;
    }

    // keep only the names where .includes() return true
    const filteredNames = allNames.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayResults(filteredNames);
};

const init = async () => {
    try {
        const data = await fetchData(url);
        allNames = data.recipes.map((recipe) => recipe.name);

        // add event listener to the input
        const searchInput = document.getElementById("searchInput");
        searchInput.addEventListener("input", (e) => {
            filterMeals(e.target.value);
        });
    } catch (error) {
        console.error(error);
    }
};

init();
