class apiService {
  constructor() {}
  postUserLogin(userName) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://localhost:44389/api/vote/join");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onreadystatechange = function(oEvent) {
      if (xhr.readyState === 4) {
        debugger;
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.log("Error", xhr.statusText);
        }
      }
    };
    xhr.send(JSON.stringify(userName));

    // fetch("https://localhost:44389/api/vote/join")
    //   .then(data => {})
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
}

export default apiService;
