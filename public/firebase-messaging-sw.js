importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAOTPiYX_gzzVKxLvnh2NToKRwOhjqOo1U",
    authDomain: "king-canute-a0327.firebaseapp.com",
    databaseURL: "https://king-canute-a0327-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "king-canute-a0327",
    storageBucket: "king-canute-a0327.appspot.com",
    messagingSenderId: "428957602915",
    appId: "1:428957602915:web:58475678cc53fda6e29456"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  console.log(payload.notification.title, payload.notification.body);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});