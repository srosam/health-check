import { HubConnectionBuilder } from "@aspnet/signalr";

class signal2 {
  constructor(logMessage) {
    this.connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44389/health")
      .build();

    this.connection
      .start()
      .then(function() {
        //console.log("connected");
        logMessage("Connected to the SignalR hub");
      })
      .catch(function(err) {
        console.log(err);
      });

    this.connection.on("MemberJoined", name => {
      //console.log("Member " + name + " Joined the thing");
      logMessage("Member " + name + " Joined the thing");
    });
  }
}

export default signal2;
