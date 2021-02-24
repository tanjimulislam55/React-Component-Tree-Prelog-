import {Router} from '@reach/router'

import HomePage from '../pages'
import LoginPage from '../pages/login'
import RegistrationPage from '../pages/registration'


function AppRouter() {
    return (
        <Router>
            <HomePage path='/' />
            <LoginPage path='/login' />
            <RegistrationPage path='/registration' />
        </Router>
    )
}

export default AppRouter