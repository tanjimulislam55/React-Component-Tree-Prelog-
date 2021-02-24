import blog1 from '../assets/img/1.jpg'
import blog2 from '../assets/img/2.jpg'
import blog3 from '../assets/img/3.jpg'
import blog4 from '../assets/img/4.jpg'

function Blog() {
    return (
        <div class="blog pad">
            <div class="container">
                <div class="default-heading">
                    {/* <!-- heading --> */}
							<h2>Our Blogs</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {/* <!-- blog entry --> */}
								<div class="entry">
                            {/* <!-- blog post image --> */}
									<div class="entry-pic">
                                <img class="img-responsive" src={blog1} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
									<div class="entry-post">
                                {/* <!-- blog information --> */}
										<span class="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
										<h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
										<p>Duis aute irure dolor in repreh enderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat cupidatat non proident tate velit esse cillum dolore.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        {/* <!-- blog entry --> */}
								<div class="entry">
                            {/* <!-- blog post image --> */}
									<div class="entry-pic">
                                <img class="img-responsive" src={blog2} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
									<div class="entry-post">
                                {/* <!-- blog information --> */}
										<span class="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
										<h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
										<p>Duis aute irure dolor in repreh enderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat cupidatat non proident tate velit esse cillum dolore.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {/* <!-- blog entry --> */}
								<div class="entry">
                            {/* <!-- blog post image --> */}
									<div class="entry-pic">
                                <img class="img-responsive" src={blog3} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
									<div class="entry-post">
                                {/* <!-- blog information --> */}
										<span class="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
										<h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
										<p>Duis aute irure dolor in repreh enderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat cupidatat non proident tate velit esse cillum dolore.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        {/* <!-- blog entry --> */}
								<div class="entry">
                            {/* <!-- blog post image --> */}
									<div class="entry-pic">
                                <img class="img-responsive" src={blog4} alt="" />
                            </div>
                            {/* <!-- blog content details --> */}
									<div class="entry-post">
                                {/* <!-- blog information --> */}
										<span class="meta">Lorem Ipsum Passage</span>
                                {/* <!-- blog title --> */}
										<h3>Neque porro quisquam est qui dolorem</h3>
                                {/* <!-- paragraph --> */}
										<p>Duis aute irure dolor in repreh enderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur. Excep teur sint occaecat cupidatat non proident tate velit esse cillum dolore.</p>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div class="blog-btn">
                    {/* <!-- button --> */}
							<a href="#" class="btn btn-warning">Read More Blogs</a>
                </div>
            </div>
        </div>
    )
}

export default Blog