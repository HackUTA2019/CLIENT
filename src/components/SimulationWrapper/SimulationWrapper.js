import React from 'react';
import Grid from '@material-ui/core/Grid';
import SimulationListItem from '../SimulationListItem/SimulationListItem';
const endpoint = "https://relativity-server.herokuapp.com/api/simulations";

class SimulationWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sims: [],
            currentSimIndex: -1
        }
    }

    componentWillMount() {
        fetch(endpoint)
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            this.state.sims = data;

        });
    }

    render() {
        return (
            <Grid container spacing={12}>
                <Grid item xs={3}>
                
                </Grid>

                <Grid item xs={3}>
                wasm
                </Grid>

            </Grid>   
        );
    }
}

export default SimulationWrapper;