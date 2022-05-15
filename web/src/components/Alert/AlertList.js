import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AlertListItem from './AlertListItem'
import AlertForm from './AlertForm'

import { fetchAlerts, selectAlert } from '../../actions/Alert';

class AlertList extends Component {
  constructor(props) {
    super(props);

    this.defaultAlert = {
      email: '',
      term: '',
      frequency: '2'
    };

    this.renderAlerts = this.renderAlerts.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlerts();
  }

  renderAlerts() {
    const { alerts } = this.props;

    return alerts.slice(0).reverse().map((alert) => {
      return <AlertListItem
        key={ alert._id }
        alert={ alert } />
    });
  }

  createAlert() {
    this.props.selectAlert(this.defaultAlert);
  }

  render() {
    const { alerts, alert, errors } = this.props;

    if (!alerts) {
      return <div>Loading...</div>;
    }

    if (alert || errors) {
      return (
        <div className="row my-3">
          <div className="col">
            <AlertForm/>
          </div>
        </div>
      );
    }

    return (
      <div className="wrapper">
        <div className="row my-3">
          <div className="col">
            <button
                className="btn btn-dark"
                onClick={ (e) => this.createAlert() }
                >Add new alert</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Frequency</th>
                  <th scope="col">Keyword</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.renderAlerts() }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAlerts,
    selectAlert,
  }, dispatch);
}

function mapStateToProps({ alerts, alert, errors }) {
  return {
    alerts,
    alert,
    errors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertList);
