# cordova-plugin-firebase-extended-notification-app-example
Simple cordova application using cordova-plugin-firebase-extended-notification 

### Don't forget:
Make sure that in Android SDK Manager it is installed:
* Android Support Library version 23 or greater
* Android Support Repository version 20 or greater
* Google Play Services version 27 or greater
* Google Repository version 22 or greater


### Build and Run Steps
1. Clone it;
2. Execute the `install.sh` script;
3. Copy the file `server-side/notify.php` to your server;
4. The value of `AUTHORIZATION_KEY` can be found accessing https://console.firebase.google.com, at the configurations section ([step by step tutorial](https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/wiki/How-to-find-your-firebase-server-key));
5. Download your `google-services.json`, from https://console.firebase.google.com, to the `firebase-extended-notification-app-example/platforms/android` directory;
6. Within `firebase-extended-notification-app-example`, execute build/test commands like `cordova run android --device`;
7. Run it to get the firebase token:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/gotToken.jpg)
8. Access your `notify.php` with `?to=TOKEN`:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/notificationSent.jpg)
9. And look at your device:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/master/.docs/notificationReceived.jpg)
