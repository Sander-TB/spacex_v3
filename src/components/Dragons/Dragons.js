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
		<section className='dragons'>
		<h2>Dragons</h2>
			{dragonsInfo.map((dragon) => {
				return (
					<div key={dragon.id} className="dragons-card">
						<h3>{dragon.name}</h3>
						
						<div className="dragons-card-inner">
							
							<div className="inner-card-left">
								<p>{dragon.description}</p>
								<ul>
									<li>Diameter: {dragon.diameter.meters} m</li>
									<li>Crew Capacity: {dragon.crew_capacity} persons</li>
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

							<div className="inner-card-right">
								<img src={dragon.flickr_images[0]} alt={dragon.name} />
							</div>

						
					</div>

				</div>
				);
			})}
		</section>
	);
}
