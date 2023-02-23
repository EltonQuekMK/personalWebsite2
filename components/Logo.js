import React from "react";
import { ReactSVG } from "react-svg";

class Logo extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <ReactSVG src="./favicon.svg" />
      </div>
    );
  }
}

export default Logo;
