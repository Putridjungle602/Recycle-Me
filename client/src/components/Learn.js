import React, { Component } from "react";

export default class Learn extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     message: "hello",
  //   };
  // }

  // changeMessage() {
  //   this.setState({
  //     message: "Thank you!",
  //   });
  // }

  render() {
    return (
      <div className="learnContainer">
        <div className="learnBackgroundImg">
          <img
            src="./public/Landfill.jpeg"
            className="landfillImg"
            alt="Land filled with trash"
          />
          <div className="learnBlurp">
            <div className="learnBlurpInfo">
              Landfills can produce objectionable odors and landfill gas can
              move through soil and collect in nearby buildings. Of the gases
              produced in landfills, ammonia, sulfides, methane, and carbon
              dioxide are of most concern. Ammonia and hydrogen sulfide are
              responsible for most of the odors at landfills. Important Things
              to Know About Landfill Gas https://www.health.ny.gov
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   <button onClick={() => this.changeMessage()}>Submit</button>
      // </div>
    );
  }
}
