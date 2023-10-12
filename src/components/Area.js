import React from "react";
import "../stylesheets/Area.css";
import Host from "./Host";

function Area({area, activeHosts, handleSetSelectedHost}) {
  const formattedName = area.name
            .split("_")
            .map(item => item[0].toUpperCase() + item.slice(1))
            .join(" ")

  const hostsInArea = activeHosts.filter(item => item.area === area.name)

  const mapped = hostsInArea.map((item, idx) => {
    return <Host key={idx} host={item} handleSetSelectedHost={handleSetSelectedHost} />
  })

  return (
    <div className="area" id={area.name}>
      <h3 className="labels">
        {formattedName}
      </h3>
        {mapped}
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
