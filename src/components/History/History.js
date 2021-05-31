import { useState, useEffect } from "react";
import axios from "axios";

export default function Info() {
	const [history, setHistory] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/history";

	useEffect(
		() => {
			async function getLaunch() {
				try {
					const response = await axios.get(url);
					console.log(response.data);
					setHistory(response.data);
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

	if (loading) return <div>Loading...</div>;
	if (error) return <div>An error has occurred, please reload the page</div>;

	return (
		<section className='History'>
			<h2>Historical Events</h2>
		</section>
	);
}
