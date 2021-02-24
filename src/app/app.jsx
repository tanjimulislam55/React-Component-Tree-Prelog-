import React, {Fragment} from 'react'
import { Helmet } from 'react-helmet'
import AppRouter from './router'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import '../assets/css/bootstrap.min.css'
// import '../assets/css/font-awesome.min.css'
    

class App extends React.Component {
    render() {
        return (
            <Fragment>

                <Helmet>

                    <meta charset="utf-8" />
                    <title>PRELOG - Powered By IndioWeb.in</title>
                    <meta name="description" content="Your description" />
                    <meta name="keywords" content="Your,Keywords" />
                    <meta name="author" content="ResponsiveWebInc" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link href="css/bootstrap.min.css" rel="stylesheet" />
                    <link href="css/font-awesome.min.css" rel="stylesheet" />
                    <link href="css/style.css" rel="stylesheet" />
                    <link rel="shortcut icon" href="#" />
                    
                </Helmet>

                <AppRouter />

            </Fragment>
    
        )

    }
}

export default App