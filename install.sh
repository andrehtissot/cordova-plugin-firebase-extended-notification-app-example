PROJECT_DIR=$(dirname "$0")
cd "$PROJECT_DIR/app-example"
cordova platform remove android
cordova platform add android@latest

# RAW_DIR="platforms/android/app/src/main/res/raw"
# if [ ! -f "$RAW_DIR/lost_european_the_beginning_of_the_end_mp3" ]; then
#     mkdir $RAW_DIR
#     wget https://github.com/andrehtissot/cordova-plugin-firebase-extended-notification-app-example/raw/ad3e26fa5ff9ce93b35f7e861c912e5560637ece/app-example/platforms/android/res/raw/lost_european_the_beginning_of_the_end_mp3 -O "$RAW_DIR/lost_european_the_beginning_of_the_end_mp3"
# fi
