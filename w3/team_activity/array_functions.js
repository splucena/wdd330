let appendToUl = (ul, array) => {
    array.forEach((item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    })
}

let sortArray = (x, y, sortOrder) => {
    if (sortOrder === 'asc') {
        return (x > y) ? 1 : -1;
    } else {
        return (x < y) ? 1 : -1;
    }
}

let display = () => {
    let inputValue = document.querySelector('#inputBox').value.trim();
    let numbers = inputValue.split(' ');

    let sort_asc = document.querySelector('#sort_asc').checked;
    let sort_desc = document.querySelector('#sort_desc').checked;
    let map = document.querySelector('#map').checked;
    let reduce = document.querySelector('#reduce').checked;
    let filter_even = document.querySelector('#filter_even').checked;

    // Create ul
    let ul = document.createElement('ul');
    // output
    let output = document.querySelector('#output');
    output.innerHTML = "";

    if (sort_asc) {
        //console.log('sort_asc');
        let numbersSort = numbers.sort((x, y) => {
            return sortArray(x, y, 'asc');
        })
        appendToUl(ul, numbersSort);
    } else if (sort_desc) {
        //console.log('sort_desc');
        let numbersSort = numbers.sort((x, y) => {
            return sortArray(x, y, 'desc');
        })
        appendToUl(ul, numbersSort);
    } else if (map) {
        //console.log('map');
        let numbersMap = numbers.map(number => Number(number) * 2);
        appendToUl(ul, numbersMap);
    } else if (reduce) {
        //console.log('reduce');
        let numbersMap = numbers.reduce((total, x) => {
            return total + Number(x);
        }, 0);
        let li = document.createElement('li');
        li.innerHTML = numbersMap;
        ul.appendChild(li);
    } else if (filter_even) {
        //console.log('filter_even');
        let numbersEven = numbers.filter(number => Number(number) % 2 === 0);
        appendToUl(ul, numbersEven);
    } else {
        //console.log('filter_odd');
        let numbersOdd = numbers.filter(number => Number(number) % 2 !== 0);
        appendToUl(ul, numbersOdd);
    }
    // Append result to output
    output.appendChild(ul);
}

let submit = document.querySelector('#submit');
submit.addEventListener('click', display);