import Blog from '../blog'
import Action from '../action'
import Banner from '../banner'
import Benefits from '../benefits'
import Hero from '../hero'
import Testimonial from '../testimonial'

function Main() {
    return (
        <div class="main-content bottom-0">
            <Banner />
            <Hero />
            <Benefits />
            <Action />
            <Testimonial />
            <Blog />
        </div>
    )
}

export default Main 