import React from 'react';

const Card = ({id, username, name, email}) =>{
	return (
		//<h1>RobotFriends</h1>
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<h2>{username}</h2>
			<img alt="robots" src={`https://robohash.org/${id + username}?50x50`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;