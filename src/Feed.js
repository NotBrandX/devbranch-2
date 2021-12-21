import React, {useState, useEffect} from 'react';
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import database from './firebase'
import {doc, onSnapshot, collection, query} from 'firebase/firestore'

function Feed() {
	const [posts, setPosts] = useState([])

	// useEffect(() => {
	// 	database.collection('posts')
	// 		.orderBy('timestamp', 'desc')
	// 		.onSnapshot((snapshot) =>
	// 			setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
	// 		);
	// }, []);

	useEffect(() => {
		const q = query(collection(database, 'posts'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			console.log(
				'Data',
				querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
			);
		});
	}, []);

    return (
			<div className='feed'>
				<StoryReel />
				<MessageSender />

				{posts.map((post) => (
					<Post
						key={post.id}
						profilePic={post.data.profilePic}
						message={post.data.message}
						timestamp={post.data.timestamp}
						username={post.data.username}
						image={post.data.image}
					/>
				))}
			</div>
		);
}

export default Feed;