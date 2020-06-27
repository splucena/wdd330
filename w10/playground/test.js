const foods = fetch('https://api.nal.usda.gov/fdc/v1/search?api_key=rdPSfFkMDP7VEhRo5jZCtMIhVUOokhmWVYCXtl0T&query=cheese', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            //generalSearchInput: search,
            includeDataTypes: {
                "Survey (FNDDS)": true,
                Foundation: true,
                Branded: false,
            },
            requireAllWords: "true"
        })
    })
    .then(function (response) {
        if (!response.ok) {
            console.log(response.statusText);
        } else {
            response.json().then(data => {
                document.getElementById('list').innerHTML = data['foods']
                    .map(item => `<li>${item.description}</li>`).join("");
            });
        }
    })
    .then(function (error) {
        console.log(error);
    })

//console.log(foods);