import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

import Comment from './CommentModel.js';

// Hike controller
export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.querySelector(parentId);
        // this is how our controller will know about the model and view...we add them right into the class as members.
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(parentId);
        this.comment = new Comment(1, '');
    }

    showHikeList() {
        //  this will get called each time we need to display our full hike list. It should grab the list of hikes from the Model, and then send them to the view.
        // the list of hikes will come from the model
        const hikeList = this.hikeModel.getAllHikes();
        const commentList = this.comment.getCommentList();
        console.log(commentList);
        // send all hikes to the view to be displayed
        this.hikesView.renderHikeList(hikeList, commentList, this.parentElement);
        // add listener to each hike element on the view
        this.addHikeListener();

    }

    showOneHike(hikeName) {
        // use this when you need to show just one hike...with full details
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikesView.renderOneHikeFull(
            hike,
            this.parentElement
        ).onclick = () => {
            this.showHikeList();
        }
        const commentBlock = document.querySelector("#comments");
        this.comment.displayCommentView(commentBlock);
        // Attach comment to a specific hike
        this.comment.addCommentListener(hike.hikeId);
    }
    addHikeListener() {
        // for the stretch you will need to attach a listener to each of the listed hikes to watch for a touchend. 
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                this.showOneHike(e.currentTarget.dataset.name);
            })
        })
    }
}