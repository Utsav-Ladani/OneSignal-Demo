import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: '60cc1a8d-e592-46b3-a553-6507ed2d081c',
      notifyButton: {
        enable: true,
      },
      allowLocalhostAsSecureOrigin: true
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click on bell icon to subscribe to web push notifications.
        </p>
      </header>
    </div>
  );
}

export default App;
