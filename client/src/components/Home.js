import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const { changeTab } = this.props;
    return (
      <div className="homeContainer">
        <div className="homeContentWrap">
          <img
            src="./public/frworld_nature_tree_space-image-kybcbyqc.jpeg"
            className="homeImg"
            alt="tree growing out of spherical earth"
          />
          <div className="homeFeatContent">Reduce</div>
          <div className="homeFeatContent">Waste</div>
        </div>
      </div>
    );
  }
}
