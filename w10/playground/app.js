/*fetch('https://api.nal.usda.gov/fdc/v1/', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'rdPSfFkMDP7VEhRo5jZCtMIhVUOokhmWVYCXtl0T',
    }
}).then(r => {
    console.log(r.json())
})*/

import {
    key
} from "./keys.js";

import {
    getJSON
} from "./utilities.js";

const baseUrl = 'https://api.nal.usda.gov/fdc/v1/';

async function getFood(search) {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            generalSearchInput: search,
            includeDataTypes: {
                "Survey (FNDDS)": true,
                Foundation: true,
                Branded: false,
            },
            requireAllWords: "true"
        })
    };
    console.log(baseUrl + `search?api_key=${key}`);
    return await getJSON(baseUrl + `search?api_key=${key}`, options);
}

function renderList(foodList) {
    document.getElementById('list').innerHTML = foodList
        .map(item => `<li>${item.description}</li>`)
        .join("");
}

const searchELement = document.getElementById("search");
searchELement.addEventListener("keyup", search)

async function search() {
    const query = searchELement.value;

    if (query.length > 2) {
        const foods = await getFood(query);
        renderList(foods.foods);
    }
}