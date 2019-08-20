PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR/app-example"
cordova platform remove android
cordova platform add android@latest