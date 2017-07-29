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
        document.getElementById('tokenFound').innerHTML = token;
        clearInterval(interval);
      }
    }, function(e){
      document.getElementById('token').innerHTML = JSON.stringify(e);
    });
  }, 100);

  FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
      //Notification was received on device tray and tapped by the user.
      alert(JSON.stringify(data));
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      // alert(JSON.stringify(data));
    }
  });
}, false);



function getOptionsFromForm(){
  var selectedLabels=[document.getElementById('notificationOptionsForm').getElementsByClassName('style-all'),
    document.getElementById('notificationOptionsForm').getElementsByClassName('style-'
      + document.getElementById('notificationStyle').value)];
  var options = {};
  for (var i = selectedLabels.length - 1; i >= 0; i--) {
    for (var j = selectedLabels[i].length - 1; j >= 0; j--) {
      var input = selectedLabels[i][j].getElementsByTagName('input')[0];
      if(!input) { input = selectedLabels[i][j].getElementsByTagName('textarea')[0]; }
      if(!input) { input = selectedLabels[i][j].getElementsByTagName('select')[0]; }
      if(input.name && !input.disabled){
        if(input.type === 'checkbox')
          options[input.name] = input.checked;
        else options[input.name] = input.value;
      }
    }
  }
  if('textLines' in options)
    options.textLines = options.textLines.split("\n");
  if(!document.getElementById('notificationOptionsVibrationOption').disabled)
    if(document.getElementById('notificationOptionsVibrationOption').value === 'custom'){
      options.vibrate = document.getElementById('notificationOptionsCustomVibrate')
        .getElementsByTagName('input')[0].value;
      options.vibrate = eval(options.vibrate);
    } else options.vibrate = document.getElementById('notificationOptionsVibrationOption').value === 'true';
  return options;
}

function showNotification(){
  if(typeof FirebaseExtendedNotification === 'object')
    FirebaseExtendedNotification.showNotification({dataValuesToGetWhenClickedOn: 111}, getOptionsFromForm());
}
document.getElementById('notificationOptionsForm').addEventListener('submit', function(event){
  event.preventDefault();
  showNotification();
});

function forceNotificationStyle(styleName){
  document.getElementById('notificationStyle').value = styleName;
  setNotificationStyle(styleName);
}
function setNotificationStyle(styleName){
  var styles = ['simple', 'multipleLines', 'bigText', 'bigPicture']
  for (var i = styles.length - 1; i >= 0; i--) {
    if(styles[i] !== styleName) {
      var elements = document.getElementsByClassName('style-'+styles[i]);
      for (var j = elements.length - 1; j >= 0; j--)
        elements[j].style.display = 'none';
    }
  }
  var elements = document.getElementsByClassName('style-'+styleName);
  for (var j = elements.length - 1; j >= 0; j--)
    elements[j].style.display = '';
}
document.getElementById('notificationStyle').addEventListener('change', function(e){
  setNotificationStyle(e.target.value);
});

function forceVibrationOption(vibrationOption){
  document.getElementById('notificationOptionsCustomVibrate').style.display = (vibrationOption==='custom')?'':'none';
};
document.getElementById('notificationOptionsVibrationOption').addEventListener('change', function(e){
  forceVibrationOption(e.target.value);
});

function nullifyDiv(divElement){
  var input = divElement.getElementsByTagName('input')[0];
  if(!input) { input = divElement.getElementsByTagName('select')[0]; }
  if(!input) { input = divElement.getElementsByTagName('textarea')[0]; }
  if(divElement.style.textDecoration === 'line-through'){
    divElement.style.textDecoration = '';
    input.disabled=false;
  } else {
    divElement.style.textDecoration = 'line-through';
    input.disabled=true;
  }
  if(divElement.id === 'notificationOptionsVibrationOptionDiv')
    nullifyDiv(document.getElementById('notificationOptionsCustomVibrate'));
}
document.getElementById('notificationOptionsForm').addEventListener('click', function(event){
  if(event.target.className !== 'nullify') { return; }
  event.preventDefault();
  nullifyDiv(event.target.parentElement);
}, false);


function updateGeneratedCode(){
  document.getElementById('generatedCode').innerHTML = JSON.stringify({
    "to" : document.getElementById('tokenFound').innerHTML || "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
    "data" : {
      "dataValuesToGetWhenClickedOn" : 111,
      "notificationOptions" : getOptionsFromForm()
    }
  }, null, 4);
};
document.getElementById('updateGeneratedCodeButton').addEventListener('click', function(e){
  updateGeneratedCode();
});

forceNotificationStyle('simple');
forceVibrationOption('true');
