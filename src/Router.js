import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Select from "./components/select/select";
import Skills from "./components/detail/skills/skills";
import Projects from "./components/detail/projects/projects";
import Experience from "./components/detail/experience/experience";


function Router(){
        return (
            <>
                <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Select" component={Select} />                    
                    <Route path="/Skills" component={Skills} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Experience" component={Experience} />
                </Switch>
                </BrowserRouter>
                </>
            
        );
    
}

export default Router;