function Main() {
    return (
        <div className="main-content">
            <div className="container">
                {/* <!-- register area --> */}
                <div className="register-area">
                    {/* <!-- heading --> */}
                    <h3>Sign Up, For An Account</h3>
                    {/* <!-- paragraph --> */}
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor!!!</p>
                    <form role="form" id="register-form">
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputName1"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDob1">Date of Birth</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputDob1"
                                placeholder="DD-MM-YYY"
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <br />
                            <div className="btn-group" data-toggle="buttons">
                                <label className="btn btn-warning btn-sm">
                                    <input type="radio" name="options" id="option1" /> Male
                                </label>
                                <label className="btn btn-warning btn-sm">
                                    <input type="radio" name="options" id="option2" /> Female
                                </label>
                            </div>
                        </div>
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
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword2">Re-Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword2"
                                placeholder="Re-Password"
                            />
                        </div>
                        <div className="checkbox form-group">
                            <label>
                                <input type="checkbox" /> I agree with all terms and conditions.
                            </label>
                        </div>
                        <button type="submit" className="btn btn-warning">
                            Login
                        </button>
                        &nbsp;
                        <button type="reset" className="btn btn-default">
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Main;
