# Web Push Notification App

## Overview

The Web Push Notification App is a web application built using React that allows users to send and receive push notifications. It leverages Firebase Cloud Messaging (FCM) for push notification functionality, making it easy to integrate and deliver real-time updates to users' devices.

## Installation

Follow these steps to set up and run the Web Push Notification App locally:

~~~bash
git clone https://github.com/your-username/web-push-notification-app.git
cd Web-Push-Notification
npm install
npm start
~~~
It will ask permission to send you notification, allow to recieve it.

## Authentication

- 1) Go to firebase.google.com and login.
     
- 2) Create a new project, go into the web code and copy the firebaseConfig.
     
- 3) Go to firebase.js file in the src folder using vs code or any other editor.
     
- 4) There is aleady a const firebaseConfig defined, delete it and paste over there your recently copied firebaseConfig.
     
- 5) Now go to web page where your react app is running, go to inspect and then console.
     
- 6) In it token would be generated copy that token.
     
- 7) Now go to the project that you created in firebase.google.com and then go to engage, it's in the left side.
     
- 8) There select messaging, and create you first campaign then firebase notification messages.
     
- 9) Now compose the notification the way you require.
      
- 10) Send test message here put the token that you received from the web console select it and test.
      
- 11) You should see a notification on your window.

## If you are not able to see the notification even after following these steps check the settings of your browser and make it to receive notification.

##👍

