function Main() {
    return (
        <div class="main-content">
            <div class="container">
                {/* <!-- register area --> */}
                <div class="register-area">
                    {/* <!-- heading --> */}
                    <h3>Sign Up, For An Account</h3>
                    {/* <!-- paragraph --> */}
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor!!!</p>
                    <form role="form" id="register-form">
                        <div class="form-group">
                            <label for="exampleInputName1">Name</label>
                            <input type="text" class="form-control" id="exampleInputName1" placeholder="Full Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputDob1">Date of Birth</label>
                            <input type="text" class="form-control" id="exampleInputDob1" placeholder="DD-MM-YYY" />
                        </div>
                        <div class="form-group">
                            <label>Gender</label><br/>
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-warning btn-sm">
                                    <input type="radio" name="options" id="option1" /> Male
                                </label>
                                <label class="btn btn-warning btn-sm">
                                    <input type="radio" name="options" id="option2" /> Female 
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword2">Re-Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Re-Password" />
                        </div>
                        <div class="checkbox form-group">
                            <label>
                                <input type="checkbox" /> I agree with all terms and conditions.
                            </label>
                        </div>
                        <button type="submit" class="btn btn-warning">Login</button>&nbsp;
                        <button type="reset" class="btn btn-default">Reset</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main