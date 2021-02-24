import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main/home'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

