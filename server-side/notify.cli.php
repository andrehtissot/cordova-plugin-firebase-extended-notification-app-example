<?php

$FB_SERVER_KEY = getenv('FB_SERVER_KEY');
if(empty($FB_SERVER_KEY)) {
    die('FB_SERVER_KEY env variable show be given with server key from firebase');
}

$TARGET = getenv('TARGET');
if(empty($TARGET)) {
    die('TARGET env variable show be given with the device or topic to send push notification to');
}

$now = time();

$fields = [
  'to' => $TARGET,
  'data' => [
    'data' => [
        'now' => 9223372036854775807922337203685477580792233720368547758079223372036854775807
    ],
    'notificationOptions' => [
    //   'text' => "Test message at $now",
      // 'summary' => "4 messages",
      // 'textLines' => ["Message 1", "Message 2", "Message 3", "Message 4"),
      'title' => "Title test at $now",
    //   'smallIcon' => 'mipmap/icon',
    //   'largeIcon' => 'https://avatars2.githubusercontent.com/u/1174345?v=3&s=96',
      'bigPicture' => "https://cloud.githubusercontent.com/assets/7321362/24875178/1e58d2ec-1ddc-11e7-96ed-ed8bf011146c.png",
    //   'vibrate' => [100,500,100,500],
      'sound' => false,
      // 'sound' => 'http://asg.angkasapura1.co.id/mysound.mp3',
      // 'sound' => "http://tindeck.com/download/pro/yjuow/Not_That_Guy.mp3",
    //   'sound' => "res://raw/lost_european_the_beginning_of_the_end_mp3", // Downloaded from http://www.freemusicpublicdomain.com
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
  "Authorization:key=$FB_SERVER_KEY",
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

echo 'fields:';
print_r($fields);
echo "\n\nresult:";
print_r($result);

