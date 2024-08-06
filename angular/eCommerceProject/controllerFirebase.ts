import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpWXUklHoImI3samXQ-gRJuEEg3mHqSfc",
  authDomain: "angular-project-368d2.firebaseapp.com",
  projectId: "angular-project-368d2",
  storageBucket: "angular-project-368d2.appspot.com",
  messagingSenderId: "272139388270",
  appId: "1:272139388270:web:5fc6b0510190cb908b2d7f",
  measurementId: "G-PTKY700YRX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
