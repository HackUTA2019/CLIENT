import React from 'react';
import logo from './logo.svg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './App.css';
import SimulationWrapper from './components/SimulationWrapper/SimulationWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h3 className="nav-padding">Relativity</h3>
          </Grid>
        </Grid>          
      </header>

      <SimulationWrapper />
    </div>
  );
}

export default App;
