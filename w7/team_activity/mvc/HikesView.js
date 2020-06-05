// Hike View handler
export default class HikesView {
    constructor(listElementId) {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';

    }
    renderHikeList(hikeList, commentList, listElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement

        // clera content of list
        listElement.innerHTML = '';

        // loop through the hikeList from local storage
        // render each item one at a time by calling method renderOneHikeLight
        hikeList.forEach(hike => {
            listElement.appendChild(this.renderOneHikeLight(hike, commentList));
        });
    }
    renderOneHikeLight(hike, commentList) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 

        const item = document.createElement('li');
        item.classList.add('light');
        // this will be used to get a specific list
        item.setAttribute('data-name', hike.name);
        item.innerHTML = `
            <h2>${hike.name}</h2>
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
                <h3>Comments</h3>
                ${commentList.map(comment => {
                    console.log(hike.id);
                    if (comment.hikeId === hike.hikeId) {
                        return `<p>${comment.content}</p>`;
                    }
                }).join('')}
            </div>`;
        return item;
    }
    renderOneHikeFull(hike, parentElement) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal!
        const backButton = document.createElement('button');
        backButton.innerHTML = '&lt;- All Hikes';

        const item = document.createElement('li');
        item.classList.add('light');
        // this will be used to get a specific list
        item.setAttribute('data-name', hike.name);
        item.innerHTML = `
            <h2>${hike.name}</h2>
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
                <div>
                    <h3>Dscription</h3>
                    <p>${hike.description}</p>
                </div>
                <div>
                    <h3>How to get there</h3>
                    <p>${hike.directions}</p>
                </div>
            </div>`;

        parentElement.innerHTML = '';
        item.insertBefore(backButton, item.childNodes[0]);
        parentElement.appendChild(item);

        // send the button back to controller to attach a listener            
        return [backButton];
    }
}