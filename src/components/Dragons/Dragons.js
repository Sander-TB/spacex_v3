import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";

export default function Dragons() {
	const [dragonsInfo, setDragonsInfo] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/dragons";

	useEffect(
		() => {
			async function getDragons() {
				try {
					const response = await axios.get(url);
					setDragonsInfo(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getDragons();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	if (loading)
		return (
			<div>
				<img src={Loader} alt='loader' />
			</div>
		);
	if (error) return <div>An error has occurred, please reload the page</div>;

	return (
		<section className='Dragons'>
			{dragonsInfo.map((dragon) => {
				return (
					<div key={dragon.id}>
						<h2>{dragon.name}</h2>
						<img src={dragon.flickr_images[0]} alt={dragon.name} />
						<img src={dragon.flickr_images[1]} alt={dragon.name} />
						<img src={dragon.flickr_images[2]} alt={dragon.name} />
						<p>{dragon.description}</p>
						<ul>
							<li>Diameter: {dragon.diameter.meters}</li>
							<li>Crew Capacity: {dragon.crew_capacity}</li>
							<li>Orbit Duration: {dragon.orbit_duration_yr} years</li>
						</ul>
						<a
							href={dragon.wikipedia}
							target='_blank'
							rel='noopener noreferrer'
							className='btn'>
							Read More
						</a>
					</div>
				);
			})}
		</section>
	);
}
