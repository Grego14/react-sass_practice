import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/twFollowCard.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = {
	user1: {
		image: "https://cdn.pfps.gg/pfps/4065-fairly-odd-parents-8.png",
		name: "Kia Kyleigh",
		username: "KKeigh",
		following: false,
	},
	user2: {
		image:
			"https://cdn.pfps.gg/pfps/7537-ai-made-pfp-description-thoughts-of-a-man.png",
		name: "Jakari McCarthy",
		username: "jkmcart",
		following: false,
	},
	user3: {
		image: "https://cdn.pfps.gg/pfps/3125-american-psycho.png",
		name: "Daxton Yusuf",
		username: "D4xt0n",
		following: true,
	},
	user4: {
		image: "https://cdn.pfps.gg/pfps/1268-girl-pfp-1.png",
		name: "Mariam Decker",
		username: "deckmarianer",
		following: false,
	},
};

const returnUsers = () => {
	const userComponent = [];

	for (const prop in users) {
		const { name, username, image, following } = users[prop];
		userComponent.push(
			<App
				key={prop}
				name={name}
				username={username}
				imageUrl={image}
				followed={following}
			/>,
		);
	}
	return userComponent;
};

root.render(
	<aside className="tw-Aside-Content">
		<div className="tw-Follow-Card">
			<h2 className="tw-Follow-Card__text">Some people you could follow</h2>
			<div className="tw-Follow-Card__users-wrapper">{returnUsers()}</div>
		</div>
	</aside>,
);
