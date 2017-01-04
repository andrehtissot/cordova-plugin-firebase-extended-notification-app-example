# cordova-plugin-firebase-extended-notification-app-example
Simple cordova application using cordova-plugin-firebase-extended-notification 

### Build and Run Steps
1. Clone it;
2. Execute the `install.sh` script;
3. Copy the file `server-side/notify.php` to your server;
4. The value of `AUTHORIZATION_KEY` can be found accessing https://console.firebase.google.com, at the configurations section;
5. Download your `google-services.json`, from https://console.firebase.google.com, to the `firebase-extended-notification-app-example/platforms/android` directory;
6. Within `firebase-extended-notification-app-example`, execute build/test commands like `cordova run android --device`;
7. Run it to get the firebase token.
8. Access your `notify.php` with `?to=TOKEN`;
