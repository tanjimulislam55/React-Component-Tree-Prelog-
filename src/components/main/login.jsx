function Main() {
    return (
        <div className="main-content">
            <div className="container">
                {/* <!-- login area --> */}
                <div className="login-area">
                    {/* <!-- heading --> */}
                    <h3>Sign In, To Your Account</h3>
                    {/* <!-- paragraph --> */}
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor!!!</p>
                    <form role="form" id="login-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="checkbox form-group">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-warning">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
