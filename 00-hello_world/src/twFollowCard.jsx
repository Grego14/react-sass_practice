import { useState } from 'react'

export default function App({imageUrl, imageAlt = '', name, username, followed}) {
	const [followState, setFollowState] = useState(followed)
	const text = followState ? 'Following' : "Follow"

	const maxChars = (prop, char)	=> prop.length > char ? `${prop.slice(0, char)}...` : prop

	const buttonClass = followState ?
		'tw-Follow-Wrapper__follow-button button--followed'
		: 'tw-Follow-Wrapper__follow-button'

	const followHandler = () => setFollowState(!followState)

	return (
		<article className="tw-Follow-Wrapper">
			<header className="tw-Follow-Wrapper__header">
				<div className="tw-Follow-Wrapper__left-content">
					<img src={imageUrl || '../src/assets/noAvatar.png'} alt="User avatar" className="tw-Follow-Wrapper__image"/>
					<div className="tw-Follow-Wrapper__text">
						<strong className="tw-Follow-Wrapper__text__name">{maxChars(name,15) || 'unkown'}</strong>
						<span className="tw-Follow-Wrapper__text__username">@{maxChars(username,15) || 'unkownUser'}</span>
					</div>
				</div>
				<aside className="tw-Follow-Wrapper__follow">
					<button className={buttonClass} type="button" onClick={followHandler}>
						<span className="button--follow-state">{text}</span>
						<span className="button--stop-following">Unfollow</span>
					</button>
				</aside>
			</header>
		</article>
	)
}
