import React from 'react';
import './App.css';
import {Route, Switch} from 'wouter'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import VideosHome from './pages/videosHome/VideosHome'
import Video from './pages/video/Video'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
        <Route path="/" component={Home} />
        <Route path="/videos" component={VideosHome} />
        <Route path="/video/:id" component={Video} />
     </Switch>
    </div>
  );
}

export default App;
