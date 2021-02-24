import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main/login'

export default class LoginPage extends React.Component {
    render() {
        return (
            <div class='wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}