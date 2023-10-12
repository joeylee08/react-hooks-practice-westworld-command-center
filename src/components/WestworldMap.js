import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Host from "./Host";
import Area from "./Area";

function WestworldMap({allHosts, handleSetSelectedHost}) {
  const [activeHosts, setActiveHosts] = useState([])
  const [parkAreas, setParkAreas] = useState([])

  useEffect(() => {
    const currentActive = allHosts.filter(host => host.active)
    setActiveHosts(currentActive)
  }, [allHosts])

  useEffect(() => {
    fetch("http://localhost:3001/areas")
      .then(res => res.json())
      .then(areasArr => {
        setParkAreas(areasArr)
      })
  }, [])

  const allAreas = parkAreas.map((item, idx) => {
    return <Area key={idx} area={item} activeHosts={activeHosts} handleSetSelectedHost={handleSetSelectedHost} />
  })

  return <Segment id="map">{allAreas}</Segment>;
}

export default WestworldMap;
