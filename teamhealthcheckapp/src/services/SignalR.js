import React, { PureComponent } from "react";
import { string } from "prop-types";
import * as signalR from "@aspnet/signalr";

class SignalR extends PureComponent {
  constructor(props) {
    super(props);

    this.connection = null;
    this.onNotifReceived = this.onNotifReceived.bind(this);
  }

  componentDidMount() {
    const protocol = new signalR.JsonHubProtocol();

    const transport = signalR.HttpTransportType.WebSockets;

    const options = {
      transport,
      logMessageContent: true,
      logger: signalR.LogLevel.Trace,
      accessTokenFactory: () => this.props.accessToken
    };

    // create the connection instance
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.props.connectionHub, options)
      .withHubProtocol(protocol)
      .build();

    this.connection.on("MemberJoined", this.onNotifReceived);
    // this.connection.on("DownloadSession", this.onNotifReceived);
    // this.connection.on("UploadSession", this.onNotifReceived);

    this.connection
      .start()
      .then(() => console.info("SignalR Connected"))
      .catch(err => console.error("SignalR Connection Error: ", err));
  }

  componentWillUnmount() {
    this.connection.stop();
  }

  onNotifReceived(res) {
    console.info("Yayyyyy, I just received a notification!!!", res);
  }

  render() {
    return <span />;
  }
}

SignalR.propTypes = {
  connectionHub: string.isRequired,
  accessToken: string.isRequired
};

export default SignalR;
