import Action from '../action';
import Banner from '../banner';
import Benefits from '../benefits';
import Blog from '../blog';
import Hero from '../hero';
import Testimonial from '../testimonial';

function Main() {
    return (
        <div className="main-content bottom-0">
            <Banner />
            <Hero />
            <Benefits />
            <Action />
            <Testimonial />
            <Blog />
        </div>
    );
}

export default Main;
