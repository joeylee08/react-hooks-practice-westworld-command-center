import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({allHosts, selectedHost, handleSetSelectedHost}) {

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage allHosts={allHosts} handleSetSelectedHost={handleSetSelectedHost}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details selectedHost={selectedHost}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
