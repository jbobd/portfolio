import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Components
import Home from './pages/Home'
import Projects from './components/ProjectList'
import Project from './components/Project'
import Error404 from './pages/404'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Nav from './components/Nav'
// Utils
import projectData from "./utils/projectData"
import links from "./utils/links"

const Wrapper = () => {
    const cvRoute = "https://lhuddlesto-api.herokuapp.com"

    return (
        <Router>
            <ScrollToTop>
                <Nav />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" exact component={Projects} />
                        {projectData.map((project) => {
                            const name = project.name.toLowerCase().replace(/\s/g, "-")
                            return ( 
                                <Route key={`/projects/${name}`} path={`/projects/${name}`} render={()=> <Project name={project.name} />}/>
                            )
                        })}           
                        <Route component={Error404}></Route>
                    </Switch>
                <Footer 
                linkedin={links.lance.linkedin}
                github={links.lance.github}
                cvRoute={cvRoute}
                />
            </ScrollToTop>
        </Router>
        )
}

export default Wrapper