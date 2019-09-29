import React from 'react';
import Grid from '@material-ui/core/Grid';
import SimulationListItem from '../SimulationListItem/SimulationListItem';
// const endpoint = "https://relativity-server.herokuapp.com/api/simulations";
const endpoint = "http://localhost:42/api/simulations"
const wasmEndpoint = "localhost:42/static/build.wasm";


class SimulationWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sims: [],
            currentSimIndex: -1,
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
        let list = [1,2,3,3,3,3,3];

        return (
            <Grid container spacing={12}>
                <Grid item xs={3}>
                    {list.map(cur => {
                        return (<div>hello</div>)
                    })}
                </Grid>

                <Grid item xs={9}>
                wasm
                </Grid>

            </Grid>   
        );
    }
}

export default SimulationWrapper;