import { Link } from "react-router-dom";
import Hero from "../sections/home/Hero";

const Home = () => {
    return (
        <div className="mb-16">
            <Hero/>
            <Link to='/assets/ITAHARI.jpeg'>ff</Link>
        </div>
    )
}
export default Home;