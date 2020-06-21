import {
    getJSON,
    getLocation
} from './utilities.js';
import QuakesController from './QuakesController.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

const output = document.querySelector('#output');
const q = new QuakesController('#quakeList');
q.init();
//q.initPos();
//q.getQuakesByRadius();