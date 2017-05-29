document.addEventListener('deviceready', function(){
  tries = 100;
  var interval = setInterval(function(){
    if(--tries < 0){
      clearInterval(interval);
      document.getElementById('token').innerHTML = 'Firebase Token could not be acquired!';
    }
    FCMPlugin.getToken(function(token){
      if(token !== null && token !== ''){
        document.getElementById('token').innerHTML = 'Firebase Token: '+token;
        clearInterval(interval);
      }
    }, function(e){
      document.getElementById('token').innerHTML = JSON.stringify(e);
    });
  }, 100);
}, false);
