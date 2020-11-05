// const feedReducer = (state, action) => {
//     if (action.type == 'UPDATE-INPUT-TEXT') {
//         state.postText = action.text;
//         return state;
//     }
//     else if (action.type == 'ADD-POST') {
//         state.posts.push({ id: 5, text: state.postText });
//         state.postText = '';
//         return state;
//     }
// }

let initialState = {
    posts: [
        {id: 1, text: 'First post'},
        {id: 2, text: 'Second post'},
        {id: 3, text: 'Third post'},
    ],
    postText: 'Example'
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-INPUT-TEXT':
            state.postText = action.text;
            return state;
        case 'ADD-POST':
            state.posts.push({ id: 5, text: state.postText });
            state.postText = '';
            return state;
        default: return state;
    }
}

export let updatePostTextCreator = (newText) => ({ type: 'UPDATE-INPUT-TEXT', text: newText })
export let addPostCreator = () => ({ type: 'ADD-POST' })

export default feedReducer;