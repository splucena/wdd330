class CommentModel {
    constructor(hikeId, content, type = 'hike') {
        this.hikeId = hikeId;
        this.content = content;
        this.date = new Date();
        this.type = type;
        this.commentList = this.readFromLS('comments') || [];
    }

    readFromLS(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    writeToLS(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    getAllComments() {
        //const commentList = [new CommentModel(1, 'Test'), new CommentModel(2, 'Test2'), new CommentModel(3, 'Test3'), new CommentModel(1, 'Test1')];
        return this.commentList;
    }

    addComment(hikeId, content) {
        //
        const newComment = new CommentModel(hikeId, content);
        this.commentList.push(newComment);
        this.writeToLS('comments', this.commentList);
    }
}

class CommentView {

    renderCommentUI(element) {
        element.innerHTML = `
            <div class="add-comment"
                <h2>Add a comment</h2>
                <input type="text" id="comment-entry">
                <button id="add-comment">Comment</button>
            </div>`;
    }
}

export default class Comment {
    constructor(hikeId, content, commentElementId) {
        this.commentElementId = commentElementId;
        this.hikeId = hikeId;
        this.content = content;
        this.model = new CommentModel(this.hikeId, this.content);
        this.view = new CommentView();
    }
    addCommentListener(hikeId) {
        document.querySelector('#add-comment').ontouchend = () => {
            const content = document.querySelector('#comment-entry').value;
            console.log(content);
            console.log(hikeId);
            this.model.addComment(hikeId, content);
        }
    }

    getCommentList() {
        return this.model.getAllComments();
    }

    displayCommentView(element) {
        return this.view.renderCommentUI(element);
    }
}