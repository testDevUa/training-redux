import feedReducer from "./Feed-reducer";

let store = {
    _state: {
        feedPage: {
            posts: [
                {id: 1, text: 'First post'},
                {id: 2, text: 'Second post'},
                {id: 3, text: 'Third post'},
            ],
            postText: 'Example'
        }
    },
    getState() {return this._state},
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    _rerenderEntireTree() {
        console.log('State changed');
    },
    dispatch(action) {
        feedReducer(this._state.feedPage, action);
        this._rerenderEntireTree();
    } 
}

window.store = store;

export default store;