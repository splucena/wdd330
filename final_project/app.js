fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=22e8fc6a000a4b1096651b861fa7aacd&includeNutrition=true", {
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });