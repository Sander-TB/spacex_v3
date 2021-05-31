import { useHistory } from "react-router-dom";

export default function Hero() {
	const history = useHistory();

	function goToAbout() {
		history.push("/about");
	}

	return (
		<section className='home-hero'>
			<h1 className='heading home-hero-heading'>
				Space<span className='highlight'>X</span>
			</h1>
			<p className='home-hero-paragraph'>
				“You want to wake up in the morning and think the future is going to be
				great - and that’s what being a spacefaring civilization is all about.
				It’s about believing in the future and thinking that the future will be
				better than the past. And I can’t think of anything more exciting than
				going out there and being among the stars.” -Elon Musk
			</p>
			<button onClick={goToAbout} className='btn'>
				Get To Know SpaceX
			</button>
		</section>
	);
}
