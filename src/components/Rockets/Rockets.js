import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";

export default function Rockets() {
	const [rocketsInfo, setRocketsInfo] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/rockets";

	useEffect(
		() => {
			async function getLaunch() {
				try {
					const response = await axios.get(url);
					setRocketsInfo(response.data);
					console.log(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getLaunch();
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
		<section className="rockets">
			<h2>Rockets</h2>
				{rocketsInfo.map((rocket) => {
					return (
						<div key={rocket.id} className="rockets-card">
							<h3>{rocket.rocket_name}</h3>
							<div className="rockets-card-inner">		
								<div className="inner-left">
									<p>{rocket.description}</p>
									<ul>
										<li>Diameter: {rocket.diameter.meters} m</li>
										<li>Mass: {rocket.mass.kg} kg</li>
										<li>Height: {rocket.height.meters} m</li>
										<li>First Flight: {rocket.first_flight}</li>
										<li>Success Rate: {rocket.success_rate_pct}%</li>
										<li>Cost Per Launch: ${rocket.cost_per_launch}</li>
									</ul>
									<a
										href={rocket.wikipedia}
										target='_blank'
										rel='noopener noreferrer'
										className='btn'>
										Read More
									</a>
								</div>
								<div className="inner-right">
									<img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
								</div>	
							</div>
						</div>
					)
				})}
		</section>
	);
}
