import { useState, useEffect } from "react";
import axios from "axios";

export default function Info() {
	const [info, setInfo] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/info";

	useEffect(
		() => {
			async function getLaunch() {
				try {
					const response = await axios.get(url);
					console.log(response.data);
					setInfo(response.data);
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
		<section className='info'>
			<h2>Who are SpaceX?</h2>
			<p>{info.summary}</p>
			<ul>
				<li>
					Founded in {info.founded} by {info.founder}
				</li>
				<li>
					Headquarters located at {info.headquarters.address},{" "}
					{info.headquarters.city}, {info.headquarters.state}
				</li>
				<li>Employees: {info.employees}</li>
			</ul>
		</section>
	);
}
