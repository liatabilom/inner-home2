import React, { Component } from "react";

class InnerVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoUrl: "https://player.vimeo.com/video/356035233",
      password: "portfolio"
    };
  }
  render() {
    return (
      <div>
        {" "}
        <h1>
          <header className="header">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
        </h1>
        <h2>
          <iframe
            title="video"
            src={this.state.videoUrl}
            width="640"
            height="564"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </h2>
      </div>
    );
  }
}

export default InnerVideo;
