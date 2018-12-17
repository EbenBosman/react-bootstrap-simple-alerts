import React from "react";
import { connect } from "react-redux";
import { displayAlert } from "../actions/alerts";
import AlertSeverity from "../components/utilities/AlertSeverity";

class HomePage extends React.Component {
  handleInfoAlert = e => {
    e.preventDefault();
    this.props.dispatch(displayAlert("Info Alert", AlertSeverity.Info));
  };

  handleSuccessAlert = e => {
    e.preventDefault();
    this.props.dispatch(displayAlert("Success Alert", AlertSeverity.Success));
  };

  handleWarningAlert = e => {
    e.preventDefault();
    this.props.dispatch(displayAlert("Warning Alert", AlertSeverity.Warning));
  };

  handleDangerAlert = e => {
    e.preventDefault();
    this.props.dispatch(displayAlert("Danger Alert", AlertSeverity.Danger));
  };

  render() {
    return (
      <div className="m-5">
        <button onClick={this.handleInfoAlert}>Add Info Alert</button>
        <br />
        <br />
        <button onClick={this.handleSuccessAlert}>Add Success Alert</button>
        <br />
        <br />
        <button onClick={this.handleWarningAlert}>Add Warning Alert</button>
        <br />
        <br />
        <button onClick={this.handleDangerAlert}>Add Danger Alert</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(HomePage);
