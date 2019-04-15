# cordova-plugin-firebase-extended-notification-app-example

[![GitHub license](https://img.shields.io/github/license/andrehtissot/cordova-plugin-firebase-extended-notification-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/andrehtissot/cordova-plugin-firebase-extended-notification-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/issues)
[![GitHub forks](https://img.shields.io/github/forks/andrehtissot/cordova-plugin-firebase-extended-notification-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/network)
[![GitHub stars](https://img.shields.io/github/stars/andrehtissot/cordova-plugin-firebase-extended-notification-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/stargazers)
[![Known Vulnerabilities](https://snyk.io/test/github/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/badge.svg?targetFile=app-example/package.json)](https://snyk.io/test/github/andrehtissot/cordova-plugin-firebase-extended-notification-app-example?targetFile=app-example/package.json)
[![DeepScan grade](https://deepscan.io/api/teams/3417/projects/5065/branches/39492/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3417&pid=5065&bid=39492)

Simple cordova application using [cordova-plugin-firebase-extended-notification](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification).


### Don't forget:
Make sure that in Android SDK Manager it is installed:
* Android Support Library version 23 or greater
* Android Support Repository version 20 or greater
* Google Play Services version 27 or greater
* Google Repository version 22 or greater

Check the wiki for more.

### Build and Run Steps
1. Clone it;
2. Execute the `install.sh` script;
3. Copy the file `server-side/notify.php` to your server;
4. The value of `AUTHORIZATION_KEY` can be found accessing https://console.firebase.google.com, at the configurations section ([step by step tutorial](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/wiki/How-to-find-your-firebase-server-key));
5. Download your `google-services.json`, from https://console.firebase.google.com, to the `app-example` directory;
6. Within `app-example`, execute build/test commands like `cordova run android`;
7. Run it to get the firebase token:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/gotToken.jpg)
8. Access your `notify.php` with `?to=TOKEN`:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/notificationSent.jpg)
9. And look at your device:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/notificationReceived.jpg)

### Simulating Notifications
From the main page, it's possible to define the parameters, test locally and retrieve the code to use in the server.
![alt tag](https://user-images.githubusercontent.com/1174345/28749890-cd66a9cc-74ac-11e7-8719-eae09c4d34c3.jpg)
The ignore button avoids the option to be sent, using the plugin's default.
