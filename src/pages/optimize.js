import React, { Component } from "react";
import { Player } from "video-react";
// import ".../node_modules/video-react/dist/video-react.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="f-con">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            fluid={false}
            width={1200}
            height={900}
          />
          <div>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                float: "right"
              }}
            >
              dgggggggggggg
            </div>
          </div>
        </div>
      </div>
    );
  }
}
