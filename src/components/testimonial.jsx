function Testimonial() {
    return (
        <div class="testimonial">
            <div class="container">
                <div id="carousel-generic" class="carousel slide" data-ride="carousel">
                    {/* <!-- Wrapper for slides --> */}
                    <div class="carousel-inner">
                        <div class="item active pad">
                            {/* <!-- heading --> */}
                            <h3>-@Himanshu</h3>
                            {/* <!-- paragraph --> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="item pad">
                            {/* <!-- heading --> */}
                            <h3>-@Avijit Sha</h3>
                            {/* <!-- paragraph --> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div class="item pad">
                            {/* <!-- heading --> */}
                            <h3>-@Sashi Kumar</h3>
                            {/* <!-- paragraph --> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    {/* <!-- Controls --> */}
                    <a class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
                        <span class="fa fa-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
                        <span class="fa fa-chevron-right"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Testimonial