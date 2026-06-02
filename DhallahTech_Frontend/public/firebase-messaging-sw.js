
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDjUd0IQzzL6NnOrzgpSVR6m6eeTCZQgho",
  authDomain: "dhallahtech.firebaseapp.com",
  projectId: "dhallahtech",
  storageBucket: "dhallahtech.firebasestorage.app",
  messagingSenderId: "251529980765",
  appId: "1:251529980765:web:6c83e47bae2478272fd6b4",
  measurementId: "G-0CF7VZ6BFQ"
};


firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.jpeg' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});