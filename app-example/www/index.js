document.addEventListener(
  "deviceready",
  function() {
    tries = 100;
    var interval = setInterval(function() {
      if (--tries < 0) {
        clearInterval(interval);
        document.getElementById("token").innerHTML =
          "Firebase Token could not be acquired!";
      }
      FCMPlugin.getToken(
        function(token) {
          if (token !== null && token !== "") {
            document.getElementById("token").innerHTML =
              "Firebase Token: " + token;
            document.getElementById("tokenFound").innerHTML = token;
            clearInterval(interval);
          }
        },
        function(e) {
          document.getElementById("token").innerHTML = JSON.stringify(e);
        }
      );
    }, 100);

    FCMPlugin.onNotification(function(data) {
      if (data.wasTapped) {
        //Notification was received on device tray and tapped by the user.
        alert(JSON.stringify(data));
      } else {
        //Notification was received in foreground. Maybe the user needs to be notified.
        // alert(JSON.stringify(data));
      }
    });
  },
  false
);
