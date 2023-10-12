import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";

function App() {
  const [allHosts, setAllHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then(res => res.json())
      .then(hostArr => {
        setAllHosts(hostArr)
      })
  }, [])

  function handleSetSelectedHost(host) {
    setSelectedHost(host)
  }

  return (
    <Segment id="app">
      <WestworldMap allHosts={allHosts} handleSetSelectedHost={handleSetSelectedHost}/>
      <Headquarters allHosts={allHosts} selectedHost={selectedHost} handleSetSelectedHost={handleSetSelectedHost}/>
    </Segment>
  );
}

export default App;
