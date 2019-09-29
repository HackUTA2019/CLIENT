import React from 'react';
import Grid from '@material-ui/core/Grid';
import SimulationListItem from '../SimulationListItem/SimulationListItem';
import Unity, { UnityContent } from "react-unity-webgl";


const endpoint = "https://relativity-server.herokuapp.com/api/simulations";
const wasmEndpoint = "https://relativity-server.herokuapp.com/static/builds.wasm";

// const endpoint = "http://localhost:42/api/simulations"
// const wasmEndpoint = "localhost:42/static/build.wasm";

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
            // this.state.sims = data;
            this.setState({
                sims: data
            })
        });
    }

    render() {
        let list = [1,2,3,3,3,3,3];
        console.log(this.state.sims);

        return (
            <Grid container className="view-grid" spacing={12}>
                <Grid className="items-grid" item xl={4}>
                    {
                        this.state.sims.map((cur, i) => {
                            return <SimulationListItem sim={cur} />
                        })
                    }
                </Grid>

                <Grid item xl={8}>
                {/* <Unity unityContent={this.unityContent} /> */}
                <div class="webgl-content">
      <div id="unityContainer"></div>
  </div>
                
                </Grid>

            </Grid>   
        );
    }
}

export default SimulationWrapper;