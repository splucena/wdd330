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
            li.innerHTML = element['name'];
            ul.appendChild(li);
        });
        peopleList.appendChild(ul);

        const controls = document.querySelector('#controls');
        controls.innerHTML = '';

        const next = document.createElement('button');
        next.innerHTML = 'Next';
        const prev = document.createElement('button');
        prev.innerHTML = 'Prev';

        if (data['next']) {
            next.addEventListener('click', () => {
                fetchStarwars(data['next']);
            })
        }

        if (data['previous']) {
            prev.addEventListener('click', () => {
                fetchStarwars(data['previous']);
            })
        }

        controls.appendChild(prev);
        controls.appendChild(next);

        // pagination
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