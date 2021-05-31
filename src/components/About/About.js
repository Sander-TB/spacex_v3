import { useState, useEffect } from "react";
import axios from "axios";

export default function Info() {
	const [info, setInfo] = useState("");
	const [apod, setApod] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const url = "https://api.spacexdata.com/v3/info";
	const apodUrl = "https://api.nasa.gov/planetary/apod?api_key=f9eczuMd9oEnj2lbaeE8ELqdnoIw7ITHXeVOaHmJ";

	useEffect(
		() => {
			async function getLaunch() {
				try {
					const response = await axios.get(url);
					const res_apod = await axios.get(apodUrl);
					console.log(res_apod.data);
					setApod(res_apod.data);
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
		<section className='about-container'>
			<h2>Who are Space<span className="highlight">X</span>?</h2>
			<main className="about">
				<section className="about-left">
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
				<aside className="about-right">
					<img src={apod.hdurl} alt={apod.title}/>
					<p> &copy; {apod.copyright}</p>
					<p> 📸 {apod.date}</p>
				</aside>
			</main>
		</section>
	);
}
