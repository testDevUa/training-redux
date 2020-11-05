import React from 'react';
import './Feed.css';
import FeedItem from './FeedItem/FeedItem';
import {updatePostTextCreator, addPostCreator} from './../../redux/Feed-reducer';

const Feed = (props) => {
        let updateInputText = (e) => {
        let inpText = e.target.value;
        props.dispatch(updatePostTextCreator(inpText))        
    }

    let addNewPost = () => {
        props.dispatch(addPostCreator());
    }

    let allPosts = props.state.posts.map(elem => <FeedItem text={elem.text} />)

    return (
        <div className='feed'>
            {allPosts}
            <div>
                <textarea onChange = { updateInputText } value={props.state.postText} className='feed__text' placeholder='Введите текст'/>
                <button onClick = {addNewPost} className='feed__add'>Add post</button>
            </div>
        </div>
    )
}

export default Feed;