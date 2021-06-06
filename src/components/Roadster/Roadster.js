import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";
import dateFormat from "dateformat";

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

	const date = dateFormat(roadsterInfo.launch_date_utc, "mmmm dS, yyyy");

	return (
		<section className='roadster'>
			<h2>{roadsterInfo.name}</h2>
			<div className='roadster-inner'>
				<div className='roadster-inner-images'>
					<img src={roadsterInfo.flickr_images[0]} alt={roadsterInfo.name} />
					<img src={roadsterInfo.flickr_images[1]} alt={roadsterInfo.name} />
				</div>

				<div className='roadster-inner-text'>
					<ul>
						<li>
							<span className='bold'>Launch Date:</span> {date}{" "}
						</li>
						<li>
							<span className='bold'>Weight:</span>{" "}
							{roadsterInfo.launch_mass_kg} kg
						</li>
						<li>
							<span className='bold'>Speed:</span> {roadsterInfo.speed_mph} mph
						</li>
						<li>
							<span className='bold'>Distance From Earth:</span>{" "}
							{roadsterInfo.earth_distance_km} Km
						</li>
					</ul>
					<p>{roadsterInfo.details}</p>
					<a
						href={roadsterInfo.wikipedia}
						target='_blank'
						rel='noopener noreferrer'
						className='btn'>
						Read More
					</a>
				</div>
			</div>
		</section>
	);
}
