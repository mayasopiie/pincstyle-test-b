import React from 'react';
import { Alert } from 'reactstrap';

const styles = {
    alerts: {
        marginTop: '50px',
        marginBottom: '50px'
    }
}

class AlertExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <Alert style={styles.alerts} color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
        <h3>Success!</h3>
        <hr/>
        <p>You have logged in to our system!</p>
      </Alert>
    );
  }
}

export default AlertExample;