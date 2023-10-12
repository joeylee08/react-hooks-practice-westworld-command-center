import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import Host from "./Host"

function ColdStorage({allHosts, handleSetSelectedHost}) {
  const [inactiveHosts, setInactiveHosts] = useState([])

  useEffect(() => {
    const currentInactive = allHosts.filter(host => !host.active)
    setInactiveHosts(currentInactive)
  }, [allHosts])

  const mapped = inactiveHosts.map((host, idx) => {
    return <Host key={idx} host={host} handleSetSelectedHost={handleSetSelectedHost}/>
  })

  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <div className="coldStorage">
          {mapped}
        </div>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
