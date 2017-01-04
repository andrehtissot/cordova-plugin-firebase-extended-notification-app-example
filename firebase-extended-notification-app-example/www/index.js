document.addEventListener('deviceready', function(){
    FCMPlugin.getToken(function(token){
        document.getElementById('token').innerHTML = 'Firebase Token: '+token;
    }, function(e){
        document.getElementById('token').innerHTML = JSON.stringify(e);
    });
}, false);
