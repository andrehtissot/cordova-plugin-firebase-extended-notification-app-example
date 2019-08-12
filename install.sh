PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR/app-example"
cordova plugin remove cordova-plugin-local-notification
cordova platform remove android
cordova platform add android@latest
cordova plugin add cordova-plugin-local-notification --nofetch