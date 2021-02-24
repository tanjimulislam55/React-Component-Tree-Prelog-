function Main() {
    return (
        <div class="main-content">
            <div class="container">
                {/* <!-- login area --> */}
                <div class="login-area">
                    {/* <!-- heading --> */}
                    <h3>Sign In, To Your Account</h3>
                    {/* <!-- paragraph --> */}
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor!!!</p>
                    <form role="form" id="login-form">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="checkbox form-group">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                        </div>
                        <button type="submit" class="btn btn-warning">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main