import React from 'react';
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
			<div className='feed'>
				<StoryReel />
				<MessageSender />

				<Post
					profilePic='https://i.imgur.com/2l4t8eC.jpg'
					message='I did it!'
					timestamp='This is the timestamp'
					username='NotBrandX'
					image='https://www.maketecheasier.com/assets/uploads/2018/06/code-editors-mac-featured.jpg'
				/>
				<Post
					profilePic='https://i.imgur.com/2l4t8eC.jpg'
					message='I did it!'
					timestamp='This is the timestamp'
					username='NotBrandX'
				/>
			</div>
		);
}

export default Feed;