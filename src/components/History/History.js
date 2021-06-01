import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../assets/customLoader_spinny.gif";
import dateFormat from "dateformat";

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
		<section className='history'>
			<h2>Historical Events</h2>
			<div className='history-grid'>
				{history.map((Event) => {
					const date = dateFormat(Event.event_date_utc, "mmmm dS, yyyy");

					return (
						<div key={Event.id} className='history-grid-card'>
							<a href={Event.links.article} target='_blank' rel='noopener noreferrer'>
								<h3>{Event.title}</h3>
								<p className="date">{date}</p>
								<p className="slug">{Event.details}</p>
								<button className='btn btn-read-more'>Read More</button>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
}
