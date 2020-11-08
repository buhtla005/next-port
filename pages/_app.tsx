import React from 'react'
import App from 'next/app'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends App{

    render(){
        const { Component, pageProps } = this.props
        return(
                <Component {...pageProps}/>
        )
    }
}

export default Home