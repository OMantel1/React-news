import React from "react";

class ErrorMsg extends React.Component {
  render() {
    return (
      <div className="error">
        {this.props.message}
      </div>
    );
  }
}

export default ErrorMsg;