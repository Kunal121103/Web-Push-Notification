import {useEffect} from "react";
import {messaging} from "./firebase"
import {getToken} from "firebase/messaging"
import logo from './logo.svg';
import './App.css';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted"){
      //Generate token
      const token = await getToken(messaging, { vapidKey: "BDfgLXg2BVosoiT6ZrDviQPLpUsSkBv9JGfR39IVuAx_TEO7nq0OfP226AvtoEtzoZ9deG_g7BukVzQ_J6zqtsk" })
      console.log("Token: ", token);
    }else if (permission === "denied"){
      alert("You denied for the permission");
    }
  }

  useEffect(() => {
    //request user for sending notification
    requestPermission();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
