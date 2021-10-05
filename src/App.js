import React from "react";
import './App.css'
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Rowposter from "./components/Rowposter/Rowposter";
import {Orginals,action,comedy, horror, romance} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowposter url={Orginals} title='Netflix Orginals' />
      <Rowposter url={action} title='Action' isSmall />
      <Rowposter url={comedy} title='Comedy' isSmall />
      <Rowposter url={horror} title='Horror' isSmall />
      <Rowposter url={romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
