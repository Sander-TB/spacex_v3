import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";

export default function Roadster() {
	const [roadsterInfo, setRoadsterInfo] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/roadster";

	useEffect(
		() => {
			async function getRoadster() {
				try {
					const response = await axios.get(url);
					setRoadsterInfo(response.data);
				} catch (e) {
					console.log(e);
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getRoadster();
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
		<section>
			<h2>{roadsterInfo.name}</h2>
			<div className='roadster-images'>
				<img src={roadsterInfo.flickr_images[0]} alt={roadsterInfo.name} />
				<img src={roadsterInfo.flickr_images[1]} alt={roadsterInfo.name} />
				<img src={roadsterInfo.flickr_images[3]} alt={roadsterInfo.name} />
			</div>
			<ul>
				<li>Launch Date: {roadsterInfo.launch_date_utc} </li>
				<li>Weight: {roadsterInfo.launch_mass_kg} kg</li>
				<li>Speed: {roadsterInfo.speed_mph} mph</li>
				<li>Distance From Earth: {roadsterInfo.earth_distance_km} Km</li>
			</ul>
			<p>{roadsterInfo.details}</p>
			<a
				href={roadsterInfo.wikipedia}
				target='_blank'
				rel='noopener noreferrer'
				className='btn'>
				Read More
			</a>
		</section>
	);
}
