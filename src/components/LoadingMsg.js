import React from "react";

class LoadingMsg extends React.Component {
  render() {
    return (
      <div className="loading">
        <p className="loadingText">Loading</p>
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}

export default LoadingMsg;
