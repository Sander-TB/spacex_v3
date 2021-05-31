import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";

export default function Info() {
	const [history, setHistory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/history";

	useEffect(
		() => {
			async function getHistory() {
				try {
					const response = await axios.get(url);
					setHistory(response.data);
				} catch (e) {
					setError(error);
				} finally {
					setLoading(false);
				}
			}
			getHistory();
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
		<section className='History'>
			<h2>Historical Events</h2>
			{history.map((Event) => {
				return (
					<div key={Event.id}>
						<h3>{Event.title}</h3>
						<p>{Event.details}</p>
						<p>{Event.event_date_utc}</p>
						<a
							href={Event.links.article}
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
