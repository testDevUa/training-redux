import React from 'react';
import Feed from '../Feed';
import './FeedItem.css';

const FeedItem = (props) => {
    return(
        <div className='post'>
            {props.text}                        
        </div>
    )
}

export default FeedItem;