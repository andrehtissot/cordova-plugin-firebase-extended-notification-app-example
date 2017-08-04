(function(){
  var inputsNamesByExtractionAttribute = {
    'value': ['summary','title','id','text','bigPicture','largeIcon','smallIcon','color','textLines','bigText'],
    'checked': ['autoCancel','openApp','headsUp']
  };

  function getDisabledOptionsNamesFromForm(){
    var disabledOptionsNames = [];
    for(var extractionAttribute in inputsNamesByExtractionAttribute)
      for (var i = inputsNamesByExtractionAttribute[extractionAttribute].length - 1; i >= 0; i--)
        if(document.getElementsByName(inputsNamesByExtractionAttribute[extractionAttribute][i])[0].disabled)
          disabledOptionsNames.push(inputsNamesByExtractionAttribute[extractionAttribute][i]);
    if(document.getElementById('notificationOptionsVibrationOption').disabled)
      disabledOptionsNames.push('vibrate');
    if(document.getElementById('notificationOptionsSoundOption').disabled)
      disabledOptionsNames.push('sound');
    return disabledOptionsNames;
  };
  function getOptionsFromForm(formatOptions){
    var formatOptions = formatOptions || {}, options = {},
      filterDisabled = 'filter' in formatOptions && formatOptions.filter.includes('disabled'),
      filterHidden = 'filter' in formatOptions && formatOptions.filter.includes('hidden');
    for(var extractionAttribute in inputsNamesByExtractionAttribute){
      for (var i = inputsNamesByExtractionAttribute[extractionAttribute].length - 1; i >= 0; i--){
        var input = document.getElementsByName(inputsNamesByExtractionAttribute[extractionAttribute][i])[0];
        if((filterDisabled && input.disabled) || (filterHidden && input.offsetHeight === 0)) { continue; }
        options[inputsNamesByExtractionAttribute[extractionAttribute][i]] = input[extractionAttribute];
      }
    }
    if('textLines' in options && 'textLinesAs' in formatOptions && formatOptions.textLinesAs === 'arrayOfLines')
      options.textLines = options.textLines.split("\n");
    if(!filterDisabled || !document.getElementById('notificationOptionsVibrationOption').disabled){
      if(document.getElementById('notificationOptionsVibrationOption').value === 'custom'){
        options.vibrate = document.getElementById('notificationOptionsCustomVibrate')
          .getElementsByTagName('input')[0].value;
        if('vibrateAs' in formatOptions && formatOptions.vibrateAs === 'eval')
          options.vibrate = eval(options.vibrate);
      } else options.vibrate = document.getElementById('notificationOptionsVibrationOption').value === 'true';
    }
    if(!filterDisabled || !document.getElementById('notificationOptionsSoundOption').disabled){
      switch(document.getElementById('notificationOptionsSoundOption').value){
        case 'resource':
          options.sound = document.getElementById('notificationOptionsResourceSound')
            .getElementsByTagName('input')[0].value;
          break;
        case 'online':
          options.sound = document.getElementById('notificationOptionsOnlineSound')
            .getElementsByTagName('input')[0].value;
          break;
        case 'true':
          options.sound = true;
          break;
        case 'false':
          options.sound = false;
      }
    }
    return options;
  }
  function getFormatedOptionsFromForm(){
    return getOptionsFromForm({filter: ['disabled','hidden'], vibrateAs: 'eval', textLinesAs: 'arrayOfLines'});
  }

  function setOptionsToForm(optionsValues, formOptions){
    var optionsValues = optionsValues || {}, notificationStyle = 'simple';
    if('notificationStyle' in formOptions){
      switch(formOptions.notificationStyle){
        case 'multipleLines':
        case 'bigText':
        case 'bigPicture':
          notificationStyle = formOptions.notificationStyle;
      }
    }
    forceNotificationStyle(notificationStyle);
    for(var method in inputsNamesByExtractionAttribute)
      for (var i = inputsNamesByExtractionAttribute[method].length - 1; i >= 0; i--)
        if(inputsNamesByExtractionAttribute[method][i] in optionsValues)
          document.getElementsByName(inputsNamesByExtractionAttribute[method][i])[0][method]
            = optionsValues[inputsNamesByExtractionAttribute[method][i]];
    if('vibrate' in optionsValues){
      if(optionsValues.vibrate === true || optionsValues.vibrate === false)
        forceVibrationOption(optionsValues.vibrate);
      else forceVibrationOption('custom', optionsValues.vibrate);
    } else forceVibrationOption('true');
    if('sound' in optionsValues && 'soundType' in formOptions)
      forceSoundOption(formOptions.soundType, optionsValues.sound);
    else forceSoundOption('true');
  };

  function setDisabledOptionsNamesInForm(inputsNames){
    for (var i = inputsNames.length - 1; i >= 0; i--){
      if('vibrate' == inputsNames[i])
        nullifyDivAndButtonFromDiv(document.getElementById('notificationOptionsVibrationOptionDiv'));
      else if('sound' == inputsNames[i] || 'soundType' == inputsNames[i])
        nullifyDivAndButtonFromDiv(document.getElementById('notificationOptionsSoundOptionDiv'));
      else nullifyDivAndButtonFromInput(document.getElementsByName(inputsNames[i])[0]);
    }
  }

  function showNotification(){
    if(typeof FirebaseExtendedNotification === 'object')
      FirebaseExtendedNotification.showNotification({dataValuesToGetWhenClickedOn: 111}, getFormatedOptionsFromForm());
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

  function forceVibrationOption(vibrationOption, customValue){
    document.getElementById('notificationOptionsVibrationOption').value = ''+vibrationOption;
    document.getElementById('notificationOptionsCustomVibrate').style.display = (vibrationOption==='custom')?'':'none';
    if(typeof customValue !== 'undefined')
      document.getElementById('notificationOptionsCustomVibrate').getElementsByTagName('input')[0].value = customValue;
  };
  document.getElementById('notificationOptionsVibrationOption').addEventListener('change', function(e){
    forceVibrationOption(e.target.value);
  });

  function forceSoundOption(soundOption, customValue){
    document.getElementById('notificationOptionsResourceSound').style.display = 'none';
    document.getElementById('notificationOptionsOnlineSound').style.display = 'none';
    if(soundOption==='resource'){
      document.getElementById('notificationOptionsResourceSound').style.display = '';
      if(typeof customValue !== 'undefined')
        document.getElementById('notificationOptionsResourceSound').getElementsByTagName('input')[0].value = customValue;
    } else if(soundOption==='online') {
      document.getElementById('notificationOptionsOnlineSound').style.display = '';
      if(typeof customValue !== 'undefined')
        document.getElementById('notificationOptionsOnlineSound').getElementsByTagName('input')[0].value = customValue;
    }
    document.getElementById('notificationOptionsSoundOption').value = soundOption;
  };
  document.getElementById('notificationOptionsSoundOption').addEventListener('change', function(e){
    forceSoundOption(e.target.value);
  });

  function nullifyDivAndButtonFromDiv(divElement){
    nullifyDiv(divElement);
    nullifyButton(divElement.getElementsByClassName("nullify")[0]);
  }
  function nullifyDivAndButtonFromInput(inputElement){
    var divElement = inputElement.parentElement;
    while(divElement.tagName !== 'DIV'){
      divElement = divElement.parentElement;
    };
    nullifyDivAndButtonFromDiv(divElement);
  }
  function nullifyButton(buttonElement){
    if(buttonElement.innerHTML === 'Disable')
      buttonElement.innerHTML = 'Enable';
    else buttonElement.innerHTML = 'Disable';
  }
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
    if(divElement.id === 'notificationOptionsSoundOptionDiv'){
      nullifyDiv(document.getElementById('notificationOptionsResourceSound'));
      nullifyDiv(document.getElementById('notificationOptionsOnlineSound'));
    }
  }
  document.getElementById('notificationOptionsForm').addEventListener('click', function(event){
    if(event.target.className !== 'nullify') { return; }
    event.preventDefault();
    nullifyButton(event.target);
    nullifyDiv(event.target.parentElement);
  }, false);

  function updateGeneratedCode(){
    document.getElementById('generatedCode').innerHTML = JSON.stringify({
      "to" : document.getElementById('tokenFound').innerHTML || "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
      "data" : {
        "dataValuesToGetWhenClickedOn" : 111,
        "notificationOptions" : getFormatedOptionsFromForm()
      }
    }, null, 4);
  };
  document.getElementById('updateGeneratedCodeButton').addEventListener('click', function(e){
    updateGeneratedCode();
  });

  document.getElementById('saveOptionsLocally').addEventListener('click', function(e){
    window.localStorage.setItem('optionsValues', JSON.stringify(getOptionsFromForm()));
    window.localStorage.setItem('disabledOptions', JSON.stringify(getDisabledOptionsNamesFromForm()));
    window.localStorage.setItem('notificationStyle', document.getElementById('notificationStyle').value);
    window.localStorage.setItem('soundType', document.getElementById('notificationOptionsSoundOption').value);
    alert("Saved! Now the options will be recovered when restart.");
  });

  (function(){
    var options = window.localStorage.getItem('optionsValues');
    if(options === null){
      forceNotificationStyle('simple');
      forceVibrationOption('true');
      forceSoundOption('true');
      return; // Use defaults
    }
    options = JSON.parse(options);
    setOptionsToForm(options, {
      notificationStyle: window.localStorage.getItem('notificationStyle'),
      soundType: window.localStorage.getItem('soundType')
    });
    setDisabledOptionsNamesInForm(JSON.parse(window.localStorage.getItem('disabledOptions')));
  })();
  updateGeneratedCode();
})();