import React from 'react';
import './StoryReel.css'
import Story from './Story';

function StoryReel(props) {
    return (
			<div className='storyReel'>
				<Story
					image='https://i.imgur.com/cLADKxw.jpg'
					profileSrc='https://i.imgur.com/2l4t8eC.jpg'
					title='Brandon Doris'
				/>
				<Story
					image='https://www.cnet.com/a/img/VUb0TV3K1utUcsa3j6K3uIQZOKc=/940x0/2021/10/28/7d78c266-1300-4a71-86dc-bcafdb7ab5cf/facebook-connect-meta-event-october-28-2021-cnet-screenshot-127.png'
					title='Mark Zuckerberg'
				/>
				<Story
					image='https://content.fortune.com/wp-content/uploads/2020/05/F500-2020-002-Amazon.jpg'
					profileSrc='https://prabook.com/web/show-photo-icon.jpg?id=1918927&width=220&cache=false'
					title='Jeff Bezos'
				/>
				<Story
					image='http://spaceflightnow.com/wp-content/uploads/2021/08/starship4.jpg'
					profileSrc='https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg'
					title='Elon Musk'
				/>
				<Story
					image='https://cdn.geekwire.com/wp-content/uploads/2017/04/billgates1.jpg'
					profileSrc='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987'
					title='Bill Gates'
				/>
			</div>
		);
}

export default StoryReel;