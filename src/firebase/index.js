import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactDOM from "react-dom/client"
import App from "./app"

const firebaseConfig = {
  apiKey: "${process.env.REACT_APP_APIKEY}",
  authDomain: "${process.env.REACT_APP_AUTHDOMAIN}",
  projectId: "${process.env.REACT_APP_PROJECTID}",
  storageBucket: "${process.env.REACT_APP_STORAGEBUCKET}",
  messagingSenderId: "${process.env.REACT_APP_MESSAGINGSENDERID}",
  appId: "${process.env.REACT_APP_APPID}",
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
export const db = getFirestore(app);