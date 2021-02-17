import './App.css';
import Header from "./header.js";
import Sidebar from "./sidebar.js"
import RecommendVideos from "./RecommendVideos.js"
import Searchpage from "./Searchpage.js"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component{

    render(){return (
      <div className="App">

      <Router>
        <Header />
        <Switch>

          <Route path = "/search">
            <div className = "app_page">
              <Sidebar />              
              <Searchpage />
            </div>
          </Route>

          <Route path = "/">
            <div className = "app_page">
              <Sidebar />
              <RecommendVideos />
            </div>
          </Route>
          
        </Switch>
      </Router>
      </div>
    );}
}

export default App;
