import React from "react"
import Landing from '../components/Landing'
import About from '../components/About'

const Home = () => {
    return (
        <div className="wrapper"> 
                <title>Web Developer - Juan Bobadilla</title>
                <meta name="author" content="Juan Bobadilla" />
                <meta name="description" content="Juan bobadilla Portfolio"/>
                <meta property="og:title" content="Web Developer - Juan Bobadilla" />
                <meta property="og:description" content="Juan bobadilla Portfolio" />
                <link rel="canonical" href="https://jbob.com.ar"/>
            <Landing />
            <About />
      </div>
    )
}

export default Home;