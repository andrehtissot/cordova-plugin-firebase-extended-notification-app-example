PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR/app-example"
cordova platform remove android
cordova platform add android
git checkout platforms/android/res/raw/lost_european_the_beginning_of_the_end_mp3