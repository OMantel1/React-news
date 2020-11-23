import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header  colored-bg">
        <h1>NEWS</h1>
        <p>News fetched from NewsApi</p>
      </header>
    );
  }
}

export default Header;
