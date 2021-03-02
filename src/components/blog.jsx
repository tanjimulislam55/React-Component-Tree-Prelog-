import blog1 from '../assets/img/1.jpg';
import blog2 from '../assets/img/2.jpg';
import blog3 from '../assets/img/3.jpg';
import blog4 from '../assets/img/4.jpg';

function Blog() {
    return (
        <div className="blog pad">
            <div className="container">
                <div className="default-heading">
                    {/* <!-- heading --> */}
                    <h2>Our Blogs</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {/* <!-- blog entry --> */}
                        <div className="entry">
                            {/* <!-- blog post image --> */}
                            <div className="entry-pic">
                                <img className="img-responsive" src={blog1} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
                            <div className="entry-post">
                                {/* <!-- blog information --> */}
                                <span className="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
                                <h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
                                <p>
                                    Duis aute irure dolor in repreh enderit in volu ptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat
                                    cupidatat non proident tate velit esse cillum dolore.
                                </p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <!-- blog entry --> */}
                        <div className="entry">
                            {/* <!-- blog post image --> */}
                            <div className="entry-pic">
                                <img className="img-responsive" src={blog2} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
                            <div className="entry-post">
                                {/* <!-- blog information --> */}
                                <span className="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
                                <h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
                                <p>
                                    Duis aute irure dolor in repreh enderit in volu ptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat
                                    cupidatat non proident tate velit esse cillum dolore.
                                </p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {/* <!-- blog entry --> */}
                        <div className="entry">
                            {/* <!-- blog post image --> */}
                            <div className="entry-pic">
                                <img className="img-responsive" src={blog3} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
                            <div className="entry-post">
                                {/* <!-- blog information --> */}
                                <span className="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
                                <h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
                                <p>
                                    Duis aute irure dolor in repreh enderit in volu ptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat
                                    cupidatat non proident tate velit esse cillum dolore.
                                </p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <!-- blog entry --> */}
                        <div className="entry">
                            {/* <!-- blog post image --> */}
                            <div className="entry-pic">
                                <img className="img-responsive" src={blog4} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
                            <div className="entry-post">
                                {/* <!-- blog information --> */}
                                <span className="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
                                <h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
                                <p>
                                    Duis aute irure dolor in repreh enderit in volu ptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat
                                    cupidatat non proident tate velit esse cillum dolore.
                                </p>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="blog-btn">
                    {/* <!-- button --> */}
                    <a href="#" className="btn btn-warning">
                        Read More Blogs
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Blog;
