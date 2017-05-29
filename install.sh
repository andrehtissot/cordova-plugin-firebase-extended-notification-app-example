PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR/app-example"
cordova platform add android
cordova plugin add https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification
