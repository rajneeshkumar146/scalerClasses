import getCountries from "./fetchApi.js";

// getCountries("phi").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions ----------------------------------------

const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    console.log(countryNameArr);
    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }


    // Before showing any result rest your suggestions.
    suggestionBox.innerHTML = "";
    const fragment = document.createDocumentFragment();

    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}

const handleSuggestions = async (event) => {
    const keyword = event.target.value;
    // console.log(keyword);
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

function debounce(cb, delay = 1000) {
    let timeoutId = null;
    return (...args) => {
        // resetting the timer.
        if (timeoutId) {
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }


        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;
        }, delay);
    }
}

inputBox.addEventListener("input", debounce(handleSuggestions))

