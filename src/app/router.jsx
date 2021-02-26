import {Router} from '@reach/router'

import HomePage from '../pages'
import LoginPage from '../pages/login'
import RegistrationPage from '../pages/registration'
import NotFoundPage from '../pages/404'

function AppRouter() {
    return (
        <Router>
            <HomePage path='/' />
            <LoginPage path='/login' />
            <RegistrationPage path='/registration' />
            <NotFoundPage default />
        </Router>
    )
}

export default AppRouter