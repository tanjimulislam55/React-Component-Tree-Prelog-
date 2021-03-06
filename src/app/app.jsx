import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import AppRouter from './router';

class App extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charset="utf-8" />
                    <title>PRELOG - Powered By IndioWeb.in</title>
                    <meta name="description" content="Your description" />
                    <meta name="keywords" content="Your,Keywords" />
                    <meta name="author" content="ResponsiveWebInc" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="#" />
                </Helmet>

                <AppRouter />
            </>
        );
    }
}

export default App;
