import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SimulationListItem extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }
    sendNewHash(cur) {
      window.updateHash(cur.hash);
  }
    render() {
        return (
            <Card className="sim-item">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {this.props.sim.simulationName}
                  </Typography>
                  <Typography color="textSecondary">
                    {this.props.sim.studentName} - {this.props.sim.hash}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {this.props.sim.description || "Some random description here..."}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => this.sendNewHash(this.props.sim)}>Load</Button>
                </CardActions>
            </Card>
        );
    }
}

export default SimulationListItem;