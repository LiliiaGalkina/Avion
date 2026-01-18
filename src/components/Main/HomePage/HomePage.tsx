import Hero from "./Hero";
import Brand from "./Brand";
import HomePageProducts from "./HomePageProducts";

const HomePage = () => {
    return (
        <main className="main">
			<Hero />
			<Brand />
			<HomePageProducts/>
        </main>
    )
}

export default HomePage;