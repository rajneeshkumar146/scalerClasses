import getCountries from "./fetchApi.js";

// getCountries("phi").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions ----------------------------------------

const handleSearch = async (keyword) => {

}

const populateSuggestionBox = (countryNameArr) => {

}

const handleSuggestions = async(event) => {
    const keyword = event.target.value;
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

