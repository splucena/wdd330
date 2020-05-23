import {
    Hike
} from './hike.js';


let hike1 = new Hike("Bechler Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short hike along the Bechler river to Bechler Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.");
let hike2 = new Hike("Teton Canyon",
    "falls.jpg",
    "Image of Bechler Falls",
    "3 miles",
    "Easy",
    "Beautiful short (or long) hike through Teton Canyon.",
    "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.");
let hike3 = new Hike("Denanda Falls",
    "falls.jpg",
    "Image of Bechler Falls",
    "7 miles",
    "Moderate",
    "Beautiful hike through Bechler meadows river to Denanda Falls",
    "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.");

//let hikeList = [];
//hikeList.push(hike1);
//hikeList.push(hike2);
//hikeList.push(hike3);

//console.table(hikeList);

//hikeList.forEach(hike => {
//    document.querySelector('ul').innerHTML +=
//        `<li>${hike.name}</li>`;
//})
export default class Hikes {
    constructor() {
        this.hikeList = [];
        //this.hike = new Hike(name, imgSrc, imgAlt, distance, difficulty, description, directions);
    }
    addHike(name, imgSrc, imgAlt, distance, difficulty, description, directions) {
        let hike = new Hike(name, imgSrc, imgAlt, distance, difficulty, description, directions);
        this.hikeList.push(hike);
    }
    showHikeList() {
        const hikeListElement = document.querySelector('#hike-list');
        hikeListElement.innerHTML = '';
        this.renderHikeList(this.hikeList, hikeListElement);
        //this.renderOneHikeFull(hikeListElement, this.hikeList[0]);
        this.addHikeListener();
    }
    renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
            parent.appendChild(this.renderOneHike(hike));
            //this.renderOneHikeFull(parent, hike);
        });
    }
    renderOneHike(hike) {
        const imgBasePath = "//byui-cit.github.io/cit261/examples/";
        const hikeItem = document.createElement('li');
        hikeItem.setAttribute('data-name', hike.name);
        hikeItem.classList.add('one-hike');
        hikeItem.innerHTML = ` <h2>${hike.name}</h2>
          <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div class="details">
                  <div>
                      <h3>Distance</h3>
                      <p>${hike.distance}</p>
                  </div>
                  <div>
                      <h3>Difficulty</h3>
                      <p>${hike.difficulty}</p>
                  </div>
          </div>`;
        return hikeItem;
    }
    renderOneHikeFull(parent, hike) {
        parent = document.querySelector(parent);
        const imgBasePath = "//byui-cit.github.io/cit261/examples/";
        const backButton = document.createElement('button');
        backButton.innerHTML = '&lt;- All Hikes';
        const item = document.createElement('li');
        item.classList.add('full-hike');
        item.setAttribute('data-name', hike.name);
        item.innerHTML = ` 
            
                <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <h2>${hike.name}</h2>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>${hike.description}</p>
                </div>
                <div>
                    <h3>How to get there</h3>
                    <p>${hike.directions}</p>
                </div>
            
            `;
        parent.innerHTML = '';
        item.insertBefore(backButton, item.childNodes[0]);
        parent.appendChild(item);
        // send the button back to the controller to attach a listener
        return backButton;
    }
    getHikeByName(name) {
        return this.hikeList.find(hike => hike.name === name);
    }
    showOneHike(hikeName) {
        const hike = this.getHikeByName(hikeName);
        this.renderOneHikeFull(
            '#hike-list',
            hike
        ).onclick = () => {
            console.log(2);
            this.showHikeList();
        };
    }
    addHikeListener() {
        console.log(1);
        // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.        
        const childrenArray = Array.from(document.querySelector('#hike-list').childNodes);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                // why currentTarget instead of target?
                this.showOneHike(e.currentTarget.dataset.name);
            });
        });
    }
}