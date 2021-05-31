import {
	IoLogoYoutube,
	IoLogoTwitter,
	IoLogoLinkedin,
	IoLogoInstagram,
	IoLogoFlickr,
} from "react-icons/io5";

export default function Footer() {
	return (
		<footer className='footer'>
			<p>
				&copy; <span className='copyright'>Copyright</span> SpaceX 2021
			</p>
			<ul>
				<li>
					<a href='https://www.flickr.com/photos/spacex'>
						<IoLogoFlickr />
					</a>
				</li>
				<li>
					<a href='https://www.instagram.com/spacex/'>
						<IoLogoInstagram />
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/company/spacex/'>
						<IoLogoLinkedin />
					</a>
				</li>
				<li>
					<a href='https://twitter.com/SpaceX' target='_blank' rel='noreferrer'>
						<IoLogoTwitter />
					</a>
				</li>
				<li>
					<a
						href='https://www.youtube.com/user/spacexchannel'
						target='_blank'
						rel='noreferrer'>
						<IoLogoYoutube />
					</a>
				</li>
			</ul>
			<p>
				<a href='https://www.spacex.com/' target='_blank' rel='noreferrer'>
					Visit SpaceX's site
				</a>
			</p>
		</footer>
	);
}
