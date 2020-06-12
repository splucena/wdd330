let fetchStarwars = (url = 'https://swapi.dev/api/people/') => fetch(url)
    .then(response => response.json())
    .then(data => {
        const peopleList = document.querySelector('#people-list');
        peopleList.innerHTML = '';
        const ul = document.createElement('ul');

        console.log(data);

        const results = data['results'];
        results.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `Name: ${element['name']}`;
            li.addEventListener('click', () => {
                const films = element['films'];
                const starships = element['starships'];

                // toggle starships
                li.classList.toggle('show');

                // display starships
                if (starships.length > 0) {
                    const div = document.createElement('div');
                    div.classList.add('starships');
                    const h4 = document.createElement('h4');
                    h4.innerHTML = 'Starships';
                    div.appendChild(h4);
                    const hasDiv = li.querySelector('div');

                    if (hasDiv == null) {
                        starships.forEach((starship) => {

                            starship = starship.slice(4, starship.length);
                            // fetch starship                    
                            fetch(`https${starship}`)
                                .then(response => response.json())
                                .then(data => {
                                    const p = document.createElement('p');
                                    p.innerHTML = '';
                                    p.innerHTML = data['name'];
                                    div.appendChild(p)
                                    li.appendChild(div);
                                }).then()
                        })
                    }
                } else {
                    const p = document.createElement('p');
                    const hasP = li.querySelector('p');
                    if (hasP == null) {
                        p.innerHTML = `Sorry, no starship for ${element['name']}.`;
                        p.classList.add('danger');
                        li.appendChild(p);
                    }
                }
            });
            ul.appendChild(li);
        });
        peopleList.appendChild(ul);

        const controls = document.querySelector('#controls');
        controls.innerHTML = '';

        const next = document.createElement('button');
        next.innerHTML = 'Next';
        const prev = document.createElement('button');
        prev.innerHTML = 'Prev';

        // Call the same function to display new set of data
        if (data['next']) {
            next.addEventListener('click', () => {
                let next = data['next']
                next = next.slice(4, next.length);
                fetchStarwars(`https${next}`);
            })
        }

        if (data['previous']) {
            prev.addEventListener('click', () => {
                let previous = data['previous']
                previous = previous.slice(4, previous.length);
                fetchStarwars(`https${previous}`);
            })
        }

        controls.appendChild(prev);
        controls.appendChild(next);

        // Pagination
        const pages = document.querySelector('#pages');
        pages.innerHTML = '';
        let pageCount = Math.floor((data['count'] / 10) + 1);
        // Create buttons then assign events
        for (let i = 1; i <= pageCount; i++) {
            const buttonPage = document.createElement('button');
            buttonPage.innerHTML = i;
            buttonPage.addEventListener('click', () => {
                fetchStarwars(`https://swapi.dev/api/people/?page=${i}`);
            })
            pages.appendChild(buttonPage);
        }
    });

fetchStarwars();