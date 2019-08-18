<?php

$isWeb = !empty($_REQUEST['target']);

$serverKey = getenv('FB_SERVER_KEY');
if(empty($serverKey)) {
    exit("FB_SERVER_KEY env variable should be given.\n");
}

if($isWeb) {
  $target = $_REQUEST['target'];
} else {
  $target = getenv('TARGET');
  if(empty($target)) {
      $errorMessage = <<<EOM
For the specific device or group, please inform the device token or topic, respectively, as:
\t- 'TARGET' env variable; or
\t- 'target' request argument.\n
EOM;
      exit($errorMessage);
  }
}


$now = time();

$fields = [
  'to' => $target,
  'data' => [
    'notificationOptions' => [
      'text' => "Test message at $now",
      // 'summary' => "4 messages",
      // 'textLines' => ["Message 1", "Message 2", "Message 3", "Message 4"),
      'title' => "Title test at $now",
      'smallIcon' => 'mipmap/icon',
      // 'largeIcon' => 'https://avatars2.githubusercontent.com/u/1174345?v=3&s=96',
      // 'bigPicture' => "https://cloud.githubusercontent.com/assets/7321362/24875178/1e58d2ec-1ddc-11e7-96ed-ed8bf011146c.png",
      'vibrate' => [100,500,100,500],
      // 'sound' => true,
      // 'sound' => 'http://asg.angkasapura1.co.id/mysound.mp3',
      // 'sound' => "http://tindeck.com/download/pro/yjuow/Not_That_Guy.mp3",
      'sound' => "res://raw/lost_european_the_beginning_of_the_end_mp3", // Downloaded from http://www.freemusicpublicdomain.com
      // 'color' => '000000ff',
      // 'color' => '0000ff',
      'color' => 0x000000ff,
      'autoCancel' => true,
      // 'openApp' => true,
      'priority' => 'high'
    ]
  ]
];

$headers = [
  "Authorization:key=$serverKey",
  'Content-Type:application/json'
];

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
curl_setopt($ch,CURLOPT_POST, true);
curl_setopt($ch,CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($fields));
$result = curl_exec($ch);
curl_close($ch);
$result = json_decode($result, true);

if($isWeb) {
  echo '<pre>';
}
echo 'fields:';
print_r($fields);
echo "\n\nresult:";
print_r($result);
