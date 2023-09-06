import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAOTPiYX_gzzVKxLvnh2NToKRwOhjqOo1U",
    authDomain: "king-canute-a0327.firebaseapp.com",
    databaseURL: "https://king-canute-a0327-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "king-canute-a0327",
    storageBucket: "king-canute-a0327.appspot.com",
    messagingSenderId: "428957602915",
    appId: "1:428957602915:web:58475678cc53fda6e29456"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);