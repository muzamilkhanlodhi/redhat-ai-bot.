import React from 'react';

function App() {
  const handleClick = () => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.showAlert('Hello from RedHat AI Bot!');
    } else {
      alert('Telegram WebApp not found!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>RedHat AI Bot</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;