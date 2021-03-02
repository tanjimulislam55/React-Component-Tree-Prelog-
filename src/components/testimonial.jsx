function Testimonial() {
    return (
        <div className="testimonial">
            <div className="container">
                <div id="carousel-generic" className="carousel slide" data-ride="carousel">
                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active pad">
                            {/* <!-- heading --> */}
                            <h3>-@Himanshu</h3>
                            {/* <!-- paragraph --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="item pad">
                            {/* <!-- heading --> */}
                            <h3>-@Avijit Sha</h3>
                            {/* <!-- paragraph --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="item pad">
                            {/* <!-- heading --> */}
                            <h3>-@Sashi Kumar</h3>
                            {/* <!-- paragraph --> */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                    {/* <!-- Controls --> */}
                    <a
                        className="left carousel-control"
                        href="#carousel-generic"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="fa fa-chevron-left" />
                    </a>
                    <a
                        className="right carousel-control"
                        href="#carousel-generic"
                        role="button"
                        data-slide="next"
                    >
                        <span className="fa fa-chevron-right" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
