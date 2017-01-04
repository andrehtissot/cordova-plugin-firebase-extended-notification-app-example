<?php

$fields = array(
  'to' => $_REQUEST['to'],
  'data' => array(
    'notificationOptions' => array(
      'text' => 'Test message',
      'title' => 'Title test',
      'smallIcon' => 'mipmap/icon',
      'largeIcon' => 'https://avatars2.githubusercontent.com/u/1174345?v=3&s=96',
      'vibrate' => 1,
      'sound' => 1,
      'autoCancel' => true
    )
  )
);

$headers = array(
  'Authorization:key='.AUTHORIZATION_KEY,
  'Content-Type:application/json'
);

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

echo '<pre>fields:';
print_r($fields);
echo "\n\nheaders:";
print_r($headers);
echo "\n\nresult:";
print_r($result);
